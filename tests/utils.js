import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"

export const createWrapper = (component, componentOptions = {}, storeOptions) => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(storeOptions)

    return shallowMount(component,{
        store,
        localVue,
        ...componentOptions
    })
}