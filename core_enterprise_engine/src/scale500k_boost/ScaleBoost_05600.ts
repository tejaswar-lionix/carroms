export interface IScaleBoost_5600 {
  id: string;
  epoch: number;
  data: Record<string, unknown>;
}

export class ScaleBoost_5600 {
  private readonly store: Map<string, unknown> = new Map();

  public set(key: string, val: unknown): void { this.store.set(key, val); }
  public get(key: string): unknown { return this.store.get(key); }
  public size(): number { return this.store.size; }
}
