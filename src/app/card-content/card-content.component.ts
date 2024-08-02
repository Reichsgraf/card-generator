import {Component, inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {map, Observable, startWith} from "rxjs";
import {CardForm} from "../_interfaces/card-form";

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  translateService = inject(TranslateService);

  @Input() formatControl!: FormControl<string>;
  @Input() cardForm!: FormGroup<CardForm>;

  currentLocale$!: Observable<any>;

  ngOnInit() {
    this.currentLocale$ = this.translateService.onLangChange.pipe(
      map((event: LangChangeEvent) => event.lang),
      startWith(this.translateService.currentLang),
    );
  }

  get description() {
    let description = '';

    if (this.cardForm.value.showStats) {
      const STR = this.cardForm.value.STR || 0;
      const DEX = this.cardForm.value.DEX || 0;
      const CON = this.cardForm.value.CON || 0;
      const INT = this.cardForm.value.INT || 0;
      const WIS = this.cardForm.value.WIS || 0;
      const CHA = this.cardForm.value.CHA || 0;
      description = `
        <table>
        <tr><th><b>СИЛ</b></th><th><b>ЛОВ</th><th><b>ТЕЛ</b></th><th><b>ИНТ</b></th><th><b>МДР</b></th><th><b>ХАР</b></th></tr>
        <tr><td>${this.getStat(STR)}</td><td>${this.getStat(DEX)}</td><td>${this.getStat(CON)}</td><td>${this.getStat(INT)}</td><td>${this.getStat(WIS)}</td><td>${this.getStat(CHA)}</td></tr>
        </table>\n`;
    }

    description += this.cardForm.get('description')?.value || '';

    return description;
  }

  getStat(stat: number): string {
    const positive = stat >= 10;
    const bonus = Math.abs(stat - 10) / 2;
    return `${stat}<br>(${positive ? '+' : '−'}${positive ? Math.floor(bonus) : Math.round(bonus)})`;
  }

}
