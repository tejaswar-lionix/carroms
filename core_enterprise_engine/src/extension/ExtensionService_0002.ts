export interface IExtensionPayload_2 {
  id: string;
  timestamp: number;
  data: Record<string, any>;
}

export class ExtensionService_2 {
  private store: Map<string, IExtensionPayload_2> = new Map();

  public save(id: string, data: Record<string, any>): void {
    this.store.set(id, { id, timestamp: Date.now(), data });
  }

  public find(id: string): IExtensionPayload_2 | undefined {
    return this.store.get(id);
  }

  public count(): number {
    return this.store.size;
  }
}
