export type Todos = TodoLine[];

export interface TodoLine {
  readonly id?: number | string | null;
  readonly title: string;
  readonly completed?: boolean | null;
  readonly editing?: boolean | null;
}
