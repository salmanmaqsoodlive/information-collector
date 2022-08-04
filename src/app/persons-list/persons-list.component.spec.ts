import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsListComponent } from './persons-list.component';

describe('PersonsListComponent', () => {
  let component: PersonsListComponent;
  let fixture: ComponentFixture<PersonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
