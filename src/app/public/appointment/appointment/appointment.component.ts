import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.scss"],
})
export class AppointmentComponent implements OnInit {
  form: FormGroup;
  options: any = { format: "DD-MM-YYYY hh:mm" };

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      date: [moment("2015-11-18T00:00Z"), Validators.required],
    });
  }

  reset(): void {
    this.form.controls["date"].reset();
  }
  ngOnInit(): void {}
}
