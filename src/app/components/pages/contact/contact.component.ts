import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContact } from './interfaces/contact.interface';
import { FormControl, FormGroup,   ReactiveFormsModule, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  providers: []
})
export class ContactComponent {
  
 
  formContact = new FormGroup<IContact>({ 
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    subject: new FormControl('', { nonNullable: true,validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true,validators: [Validators.required] }), 
  });

  onSubmit(){
    const mensagem = this.formContact.value as unknown as IContact; 
    console.log({mensagem});
    this.resetForm();
  }
  
  resetForm() {
    this.formContact.reset();
  }
}
