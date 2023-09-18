<script>
  import Logo from '$lib/images/portfolio_logo.svelte'
  // @ts-ignore
  import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte'
  // @ts-ignore
  import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte'
  // @ts-ignore
  import IoMdMoon from 'svelte-icons/io/IoMdMoon.svelte'
</script>

<header>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <Logo />
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white h-9">
        <TiThMenu />
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Portfolio
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Service
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Blog
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
      <div>
        <button class="flex h-7">
          <IoIosSunny />
          <IoMdMoon />
        </button>
      </div>
    </div>
  </nav>
</header>