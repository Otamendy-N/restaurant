import 'vue'
import '@nuxt/types'
import { UserManager } from 'oidc-client'

declare module '@nuxt/types' {
  interface Context {
    $auth: UserManager
  }
  interface NuxtAppOptions {
    $auth: UserManager
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: UserManager
  }
}

declare module 'vue/types/options' {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  interface ComponentOptions<V> {
    auth?: true | false | 'guest'
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  interface Store<S> {
    $auth: UserManager
  }
}
