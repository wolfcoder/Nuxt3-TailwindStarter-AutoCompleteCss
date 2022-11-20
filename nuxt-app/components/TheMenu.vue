<template>
  <div id="the-menu">
    <div class="w-full">
      <div class="flex mb-3">
        <div class="h-7 w-7 rounded-full bg-blue-300 font-bold text-white flex items-center justify-center">
          <span> C </span>
        </div>

        <h1 class="ml-2 font-bold text-lg " @click="$router.push('/')">Hello <span
          class="capitalize"> Guys, </span></h1>
      </div>
      <div>
        <p class="italic">"You learn more from defeats than you do from victories"</p>
        <p class="font-semibold mb-2"> ― Alex Ferguson,</p>
      </div>
      <div class="border-b border-gray-300 mb-3"></div>
      <ul class="w-full text-sm">
        <li class="text-gray-500 py-2" @click="closeMenu">
          <router-link class="text-gray-500 py-1 block"
                       to="/">Home
          </router-link>
        </li>
        <li class="text-gray-500 py-2" @click="closeMenu">
          <router-link class="text-gray-500 py-1 block"
                       to="/zippo">Zippo
          </router-link>
        </li>
        <li class="text-gray-500 py-2" @click="closeMenu">
          <router-link class="text-gray-500 py-1 block"
                       to="/zippo-pipe">Zippo pipe
          </router-link>
        </li>

        <li class="text-gray-500 py-2" @click="closeMenu">
          <router-link class="text-gray-500 py-1 block"
                       to="/zippo-accessories">Accessories zippo
          </router-link>
        </li>

        <li>
          <ul>
            <li class="border-t border-gray-300 my-3"></li>
            <li class="text-gray-500 py-2 font-semibold">
              Informasi
            </li>
            <li class="text-gray-500 py-2" @click="closeMenu">
              <router-link class="text-gray-500 py-1 block"
                           to="/cara-beli-zippo">Cara beli zippo
              </router-link>
            </li>
            <li class="text-gray-500 py-2" @click="closeMenu">
              <router-link class="text-gray-500 py-1 block"
                           to="/beda-zippo-asli-dan-palsu">Beda zippo asli dan palsu
              </router-link>
            </li>
            <li class="text-gray-500 py-2" @click="closeMenu">
              <router-link class="text-gray-500 py-1 block"
                           to="/finishing-zippo">Finishing Zippo
              </router-link>
            </li>
            <li class="text-gray-500 py-2" @click="closeMenu">
              <router-link class="text-gray-500 py-1 block"
                           to="/sejarah-zippo-dan-cozymart">Sejarah Zippo dan Cozymart
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="border-t border-gray-300 my-3"></li>
            <li class="text-gray-500 py-2 font-semibold">
              Sosial Media
            </li>
            <li class="text-gray-500 py-2 flex " @click="closeMenu">
              <a class="py-1 mr-5" href="https://www.facebook.com/cozymart" target="_blank">
                <svg width="24"
                     height="24" viewBox="0 0 24 24">
                  <path fill="#6b7280"
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a class="py-1 mr-5" href="https://www.instagram.com/cozymart/" target="_blank">
                <svg role="img" width="24"
                     height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title>
                  <path fill="#6b7280"
                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a class="py-1 mr-5" href="https://www.twitter.com/cozymart/" target="_blank">
              <svg width="24"
                   height="24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitter
                icon</title>
                <path fill="#6b7280"
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg></a>
            </li>
          </ul>
        </li>

        <!--        <li class="text-gray-500 py-2 block flex" @click="signOutHandler">-->
        <!--          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"-->
        <!--               height="20" viewBox="0 0 20 20">-->
        <!--            <path-->
        <!--                d="M17.5 2h-9c-0.827 0-1.5 0.673-1.5 1.5v3c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h7.564l-3.842 1.647c-0.685 0.294-1.222 1.108-1.222 1.853v9.5h-2.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3c0 0.827 0.673 1.5 1.5 1.5h2.5v1.5c0 0.433 0.18 0.801 0.495 1.008 0.174 0.114 0.376 0.172 0.589 0.172 0.173 0 0.354-0.038 0.532-0.114l5.162-2.212c0.685-0.294 1.222-1.108 1.222-1.854v-12c0-0.827-0.673-1.5-1.5-1.5zM18 15.5c0 0.351-0.294 0.796-0.616 0.934l-5.162 2.212c-0.096 0.041-0.159 0.038-0.177 0.027s-0.045-0.069-0.045-0.173v-12c0-0.351 0.294-0.796 0.616-0.934l5.333-2.286c0.033 0.066 0.051 0.141 0.051 0.22v12z"-->
        <!--                fill="#6b7280"></path>-->
        <!--            <path-->
        <!--                d="M8.354 9.146l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146h-6.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.293l-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707z"-->
        <!--                fill="#6b7280"></path>-->
        <!--          </svg>-->
        <!--          <span class="ml-3">Log Out</span></li>-->
        <!--        <li class="text-gray-500 py-2 block flex"  @click="signInWithGoogle">-->
        <!--          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18"-->
        <!--               height="18" viewBox="0 0 20 20">-->
        <!--            <path-->
        <!--                d="M17.5 2h-9c-0.827 0-1.5 0.673-1.5 1.5v3c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h7.564l-3.842 1.647c-0.685 0.294-1.222 1.108-1.222 1.853v9.5h-2.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3c0 0.827 0.673 1.5 1.5 1.5h2.5v1.5c0 0.433 0.18 0.801 0.495 1.008 0.174 0.114 0.376 0.172 0.589 0.172 0.173 0 0.354-0.038 0.532-0.114l5.162-2.212c0.685-0.294 1.222-1.108 1.222-1.854v-12c0-0.827-0.673-1.5-1.5-1.5zM18 15.5c0 0.351-0.294 0.796-0.616 0.934l-5.162 2.212c-0.096 0.041-0.159 0.038-0.177 0.027s-0.045-0.069-0.045-0.173v-12c0-0.351 0.294-0.796 0.616-0.934l5.333-2.286c0.033 0.066 0.051 0.141 0.051 0.22v12z"-->
        <!--                fill="#6b7280"></path>-->
        <!--            <path-->
        <!--                d="M8.354 9.146l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146h-6.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.293l-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707z"-->
        <!--                fill="#6b7280"></path>-->
        <!--          </svg>-->
        <!--          <span class="ml-3"> Login With Google</span></li>-->
      </ul>
    </div>

    <div @click="closeMenu" class="py-1">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
           height="20" viewBox="0 0 20 20">
        <path
          d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"
          fill="#6B7280"></path>
      </svg>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: "TheMenu",

  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    }
  },
}
</script>

<style scoped>
#the-menu {
  @apply bg-gray-200 py-2 px-4 flex fixed top-0 w-full h-full z-50 text-xs text-gray-700
}
</style>
