import { FormControl } from "@angular/forms";

export interface IContact { 
  email: FormControl<string>;
  subject?: FormControl<string>;
  message?: FormControl<string>; 
}
