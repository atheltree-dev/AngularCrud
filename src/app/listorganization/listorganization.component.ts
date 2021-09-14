import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Organization } from '../_models/organization';
import { AlertifyService } from '../_services/alertify.service';
import { OrganizationService } from '../_services/organization.service';



@Component({
  selector: 'app-listorganization',
  templateUrl: './listorganization.component.html',
  styleUrls: ['./listorganization.component.css']
})
export class ListorganizationComponent implements OnInit {
  organizations!: Organization[];

  constructor(private organizationService:OrganizationService ,private alertify:AlertifyService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.organizationService.getAll()
    .subscribe(organization => this.organizations = organization);


    //this.loadOrganizations();
  }
  // ngAfterViewInit(){
  //  console.log(this.organizations);
  // }
  deleteorganization(Id: number) {
    const organization = this.organizations.find(x => x.Id === Id);
    if (!organization) return;
    // organization.isDeleting = true;
    this.organizationService.delete(Id)
        .pipe(first())
        .subscribe(() => this.organizations = this.organizations.filter(x => x.Id !== Id));
}

// loadOrganizations(){
//   this.organizationService.getAll().subscribe((org :Organization[]) =>{
//     this.organizations = org;
//     console.log(this.organizations);
//   },error =>{
//     console.log(error)
//     this.alertify.error(error)
//   });
// }


}
