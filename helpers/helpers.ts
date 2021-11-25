export function routeOption (
  route: any,
  key: string,
  value: string | boolean
): boolean {
  return route.matched.some((m: any) => {
    if (process.client) {
      // Client
      return Object.values(m.components).some(
        (component: any) => component.options && component.options[key] === value
      )
    } else {
      // SSR
      return Object.values(m.components).some((component: any) =>
        Object.values(component._Ctor).some(
          (ctor: any) => ctor.options && ctor.options[key] === value
        )
      )
    }
  })
}
