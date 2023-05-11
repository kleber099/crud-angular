import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myFor]',
})
export class ForDirective implements OnInit {
  @Input('myForOf') actions: string[] = [];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let action of this.actions) {
      this.container.createEmbeddedView(this.template, {
        $implicit: `${action} Produto`,
      });
    }
  }
}
