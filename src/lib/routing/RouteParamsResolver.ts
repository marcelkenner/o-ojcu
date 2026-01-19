export type RouteParams<TParams extends object> = TParams | Promise<TParams>;

export class RouteParamsResolver<TParams extends object> {
  public async resolve(params: RouteParams<TParams>): Promise<TParams> {
    return await params;
  }
}

