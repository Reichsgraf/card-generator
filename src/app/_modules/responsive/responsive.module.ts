import {NgModule} from "@angular/core";
import {MobileDirective} from "./mobile.directive";
import {DesktopDirective} from "./desktop.directive";
import {CommonModule} from "@angular/common";
import {TabletDirective} from "./tablet.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [DesktopDirective, TabletDirective, MobileDirective],
  exports: [DesktopDirective, TabletDirective, MobileDirective]
})
export class ResponsiveModule {
}
