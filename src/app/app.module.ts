import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './core/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { StoreService } from './store.service';
import { ItemComponent } from './item/item.component';
import { ViewResolver } from './core/view.resolver';
import { ImageFormatPipe } from './core/image-format.pipe';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

export function initApp(stor: StoreService) {
  return () => {
    return stor.init().toPromise().then((respond) => stor.db = respond);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ItemComponent,
    ImageFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [StoreService]
    },
    ViewResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
