import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArchivedTodosPage } from './archived-todos.page';

describe('ArchivedTodosPage', () => {
  let component: ArchivedTodosPage;
  let fixture: ComponentFixture<ArchivedTodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedTodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchivedTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
