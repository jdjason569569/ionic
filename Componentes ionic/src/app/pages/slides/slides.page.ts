import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides = [0,1,2];
  formStep2: FormGroup;
  slideOpts: any;



  constructor( private navCtrl: NavController, public formBuilder: FormBuilder ) { 
    this.getSlideOpt();
  }

  ngOnInit() {
    this.formStep2 = this.formBuilder.group({
      names: ["", [Validators.required]],
      city: ["", [Validators.required]],
      address: ["", [Validators.required]],
      typeDocument: ["", [Validators.required]],
      identificationNumber: ["", [Validators.required]],
      birthDate: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      civilStatus: ["", [Validators.required]],
      eps: ["", [Validators.required]],
      listBeneficiary2: this.formBuilder.array([]),
    });
    this.createBeneficiary(3);
  }

  public getSlideOpt(){
    this.slideOpts = {
      initialSlide: 0,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 20,
      pager: true
    };
  }

  private createBeneficiary(count: number) {
    for (let i = 0; i < count; i++) {
      const beneficiaryGroup = this.formBuilder.group({
        names: [""],
        city: [""],
        address: [""],
        typeDocument: [""],
        identificationNumber: [""],
        birthDate: [""],
        phone: [""],
        email: [""],
        gender: [""],
        civilStatus: [""],
        eps: [""],
      });
      this.getListBeneficiary2.push(beneficiaryGroup);
    }
    console.log('list ->', this.getListBeneficiary2.value);
  }

  get getListBeneficiary2() {
    return <FormArray>this.formStep2.get("listBeneficiary2");
  }
  onClick(){
    console.log(this.formStep2.value)
  }

}
