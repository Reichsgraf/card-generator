import {Component, inject, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {map, Observable, startWith, tap} from "rxjs";

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  translateService = inject(TranslateService);

  @Input() cardForm!: FormGroup;

  currentLocale$!: Observable<any>;

  ngOnInit() {
    this.currentLocale$ = this.translateService.onLangChange.pipe(
      map((event: LangChangeEvent) => event.lang),
      startWith(this.translateService.currentLang),
    );
  }

  get description() {
    let description = '';

    if (this.cardForm.get('showStats')?.value) {
      const STR = this.cardForm.get('STR')?.value;
      const DEX = this.cardForm.get('DEX')?.value;
      const CON = this.cardForm.get('CON')?.value;
      const INT = this.cardForm.get('INT')?.value;
      const WIS = this.cardForm.get('WIS')?.value;
      const CHA = this.cardForm.get('CHA')?.value;
      description = `
        <table>
        <tr><th><b>СИЛ</b></th><th><b>ЛОВ</th><th><b>ТЕЛ</b></th><th><b>ИНТ</b></th><th><b>МДР</b></th><th><b>ХАР</b></th></tr>
        <tr><td>${this.getStat(STR)}</td><td>${this.getStat(DEX)}</td><td>${this.getStat(CON)}</td><td>${this.getStat(INT)}</td><td>${this.getStat(WIS)}</td><td>${this.getStat(CHA)}</td></tr>
        </table>\n`;
    }

    description += this.cardForm.get('description')?.value;

    return description;
  }

  getStat(stat: string): string {
    const value = parseInt(stat);
    const positive = value >= 10;
    const bonus = Math.abs(value - 10) / 2;
    return `${value}<br>(${positive ? '+' : '−'}${positive ? Math.floor(bonus) : Math.round(bonus)})`;
  }

}
