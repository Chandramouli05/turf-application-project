import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';





const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatDividerModule,
  MatMenuModule

]


@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
