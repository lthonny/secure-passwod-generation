import { IGeneratePassword } from './store/interfaces';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from './store/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public test: string[] = [
    '1234567890',
    'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
    'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
    '!@#$%-'
  ];

  // public characters: any = {
  //   numbers: '1234567890',
  //   uppercase: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
  //   lowercase: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
  //   character: '!@#$%-'
  // };

  public characters: any = [
    { numbers: '1234567890'},
    { uppercase: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'},
    { lowercase: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'},
    { character: '!@#$%-'}
  ];

  public autoTicks = false;
  public disabled = false;
  public invert = false;
  public max = 100;
  public min = 0;
  public showTicks = false;
  public step = 1;
  public thumbLabel = false;
  public lengthPassword = 0;
  public vertical = false;
  public tickInterval = 1;

  public passwordList: any = [
    { password: ''},
    { password: ''},
    { password: ''},
    { password: ''},
    { password: ''},
    { password: ''},
    { password: ''},
    { password: ''},
  ];

  form: FormGroup = new FormGroup({
    numbers: new FormControl(null, [
      Validators.required
    ]),
    lowercase: new FormControl(null, [
      Validators.required
    ]),
    uppercase: new FormControl(null, [
      Validators.required
    ]),
    excludeSimilarCharacters: new FormControl(null, [
      Validators.required
    ]),
  });

  constructor(
    private passwordService: PasswordService
  ) {
  }

  public generate() {
    const {
      numbers,
      lowercase,
      uppercase,
      excludeSimilarCharacters,
      lengthPassword,
    } = this.form.value;

    const test: IGeneratePassword = {
      numbers: numbers == null ? false : true,
      lowercase: lowercase == null ? false : true,
      uppercase: uppercase == null ? false : true,
      excludeSimilarCharacters: excludeSimilarCharacters === null ? false : true,
      lengthPassword: this.lengthPassword,
    };

    this.passwordService.generatePassword(test).subscribe((data: any)=> {
      this.passwordList = data.result;

      this.passwordList = this.passwordList.map((password: any, index: any) => {
        return password = data.result[index];
      });
    })
  }

  private getKey(value: any, array: any) {
    for (var key in array) {
        console.log(array.value);

      // if(array[0].value){
        
      //     return array[0].value;
      // }
    }
  }

  public addValue(type: string) {
    console.log(this.getKey('numbers', this.characters));

    // this.characters.forEach((typeObj: any) => {
      // console.log(typeObj.key);
      
      // if(type === typeObj) {
    //     // this.test === typeObj;
      // }
    // })
  }

  public getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}
