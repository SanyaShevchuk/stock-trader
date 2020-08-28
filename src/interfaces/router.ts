import Vue, { AsyncComponent } from "vue";

type Component = typeof Vue | AsyncComponent;

export interface IRoute {
  name: string;
  path: string;
  component: Component;
  meta?: {
    [prop: string]: boolean;
  };
}
