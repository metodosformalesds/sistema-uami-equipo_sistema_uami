import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListadoPacientePage } from './listado-paciente.page';

describe('ListadoPacientePage', () => {
  let component: ListadoPacientePage;
  let fixture: ComponentFixture<ListadoPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
