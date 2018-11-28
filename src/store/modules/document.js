import { DOCUMENT_REQUEST, DOCUMENT_ERROR, DOCUMENT_SUCCESS } from '@/store/actions/document'
import apiCall from '@/utils/api'
import Vue from 'vue'
import { AUTH_LOGOUT } from '@/store/actions/auth'

const state = { status: '', document: {} }

const getters = {
  getDocument: state => state.document,
  isDocumentLoaded: state => !!state.document.name,
}

const actions = {
  [DOCUMENT_REQUEST]: ({commit, dispatch}, id) => {
    commit(DOCUMENT_REQUEST)
    apiCall({url: 'documents/' + id})
      .then(resp => {
        commit(DOCUMENT_SUCCESS, resp)
      })
      .catch(resp => {
        commit(DOCUMENT_ERROR)
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT)
      })
  },
}

const mutations = {
  [DOCUMENT_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [DOCUMENT_SUCCESS]: (state, resp) => {
    state.status = 'success'
    Vue.set(state, 'profile', resp)
  },
  [DOCUMENT_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
