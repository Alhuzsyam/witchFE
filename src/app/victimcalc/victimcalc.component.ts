import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-victimcalc',
  templateUrl: './victimcalc.component.html',
  styleUrls: ['./victimcalc.component.css']
})
export class VictimcalcComponent {

  ageAtDeathA: number | undefined;
  yearOfDeathA: number | undefined;
  ageAtDeathB: number | undefined;
  yearOfDeathB: number | undefined;
  showAlert: boolean = false;
  showAnswer: boolean = false;
  showAlerts: boolean = false;
  averageValue: any;
  tahunke: any;
  tahunke_: any;
  korban: any;
  korban_: any;
  constructor(private http: HttpClient) {}

  calc() {
    if (!this.ageAtDeathA || !this.yearOfDeathA || !this.ageAtDeathB || !this.yearOfDeathB) {
      // alert('Please fill in all fields');
      this.showAlert = true;
      this.showAnswer = false;
      return;
    }

    this.showAlert = false;
    this.showAlerts = false;
    const body = {
      "ageAtDeathA": this.ageAtDeathA,
      "yearOfDeathA": this.yearOfDeathA,
      "ageAtDeathB": this.ageAtDeathB,
      "yearOfDeathB": this.yearOfDeathB
    };

    // this.http.post<any>("http://localhost:8087/api/v1/victim/average", body)
    this.http.post<any>("http://128.199.177.206:8087/api/v1/victim/average", body)
      .subscribe(
        (response) => {
          // Handle successful response
          // console.log('Response:', response);
          if(response.status == '200 OK'){
            this.showAnswer = true;
            this.tahunke = response.payload.personA_tahunKe;
            this.tahunke_ = response.payload.personB_tahunKe;
            this.korban = response.payload.personA_jumlahKematian;
            this.korban_ = response.payload.personB_jumlahKematian;
            this.averageValue = response.payload.average;
            // console.log('Average:', this.averageValue);
          }else{
            this.showAnswer = false;
            this.showAlerts = true;
            this.ageAtDeathA = undefined;
            this.yearOfDeathA = undefined;
            this.ageAtDeathB = undefined;
            this.yearOfDeathB = undefined;
          }
        },
        (error) => {
          // Handle error
          console.error('Error:', error);
        }
      );
  }

 
}
