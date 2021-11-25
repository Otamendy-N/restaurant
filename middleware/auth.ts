import { Context } from '@nuxt/types'
import { routeOption } from '~/helpers/helpers'

export default async function (context: Context) {
  if (context.ssrContext) { return }

  // Disable middleware if options: { auth: false } is set on the route
  // TODO: Why Router is incompatible?
  if (routeOption((context.route as unknown) as any, 'auth', false)) {
    return
  }

  const user = await context.$auth.getUser()
  if (!user || user.expired) {
    await context.redirect('/login')
    await context.$auth.signinRedirect({ state: context.route.fullPath })
  }
}
