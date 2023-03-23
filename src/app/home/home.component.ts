import { EncoderService } from './../_services/encoder.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputForm = new FormGroup({
    input: new FormControl('', Validators.required),
    output: new FormControl('')
  });

  constructor(private encoderService: EncoderService){}

  ngOnInit(): void {
  }

  submitForm() {
    const input_text = (<HTMLInputElement>document.getElementById("input_text")).value;
    return this.encoderService.getEncodedInput(input_text!)
      .subscribe((res: any) => {
        console.log(res);
        const output_text = document.getElementById("output_text");
        output_text!.innerHTML = res.encoded_value;
      })
  }
}
