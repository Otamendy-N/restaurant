export default async function ({ store, redirect, route, error }) {
  let user = store.getters['LayoutStore/user']
  let cargo = store.getters['LayoutStore/cargo']
  if (!user) {
    await store.dispatch('LayoutStore/getUser')
    await store.dispatch('LayoutStore/getCargo')
    user = store.getters['LayoutStore/user']
    cargo = store.getters['LayoutStore/cargo']
  }

  if (!user.estado) {
    redirect('/invitation')
  } else
  if (cargo.nombre !== 'admin') {
    if (cargo.nombre === 'jefe de compras' && !/purchases/.test(route.name)) {
      redirect('/purchases')
    } else

    if (cargo.nombre === 'encargado' && !(/inventory/.test(route.name) || /works/.test(route.name) || /movements/.test(route.name))) {
      redirect('/inventory')
    } else

    if (cargo.nombre !== 'jefe de compras' && cargo.nombre !== 'encargado') {
      error({ statusCode: 401 })
    }
  }
}
