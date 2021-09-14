import { OrganizationService } from './../_services/organization.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-addeditorganization',
//   templateUrl: './addeditorganization.component.html',
//   styleUrls: ['./addeditorganization.component.css']
// })
// export class AddeditorganizationComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-addeditorganization',
  templateUrl: './addeditorganization.component.html',
  styleUrls: ['./addeditorganization.component.css']
})
export class AddeditorganizationComponent implements OnInit {
    form!: FormGroup;
    id!: number;
    isAddMode!: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private organizationService: OrganizationService,
        private alertService: AlertifyService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        console.log(this.isAddMode);

        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        this.form = this.formBuilder.group({
          orgname: ['', Validators.required],
            country: ['', Validators.required],
            city: ['', Validators.required],

        });

        if (!this.isAddMode) {
            this.organizationService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createOrganization();
        } else {
            this.updateOrganization();
        }
    }

    private createOrganization() {
        this.organizationService.create(this.form.value)
            .pipe(first())
            .subscribe(() => {
                this.alertService.success('organization added');
                this.router.navigate(['/home']);
            })
            .add(() => this.loading = false);
    }

    private updateOrganization() {
        this.organizationService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe(() => {
                this.alertService.success('organization updated');
                this.router.navigate(['../../'], { relativeTo: this.route });
            })
            .add(() => this.loading = false);
    }
}
