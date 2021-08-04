import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // items:[]
    items:[{
            jobOfferId : 1,
            //img_url:require('@/img/img_member01.png'),
            slides : [
                  ['img', require('@/img/img_member01.png')],
                  ['img', require('@/img/img_member02.png')],
                  ['img', require('@/img/img_member03.png')],
                  // ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],
                ],
            isGoodActive : false,
            isStarActive : false,
            icons : ['未経験','若手'],
            name : '(1)H・O',
            age : '34歳',
            gender: 'women',
            place:'福岡県福岡市',
            desc:'ネットワークエンジニア、Webエンジニア、プログラマー',
            oneText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            workCategory:'通信業',
            workType:'正社員',
            detailText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、誰かのためになることをやりなさいと小さい頃祖母にいわれて育ちました。実際にこの言葉を実行している祖母の背中をみて育ち、私も同じように取り組み続けています。感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            purposeAndConditions:['しっかり固まった業務内容','シフト制','技術力・営業力','教育が充実'],
            personalityAndAttitude:['やる気と勢い','「まず、やってみよう」の精神','フットワークが軽い','新しいことが好き','突発残業OK'],
            educationalHistory:['福岡大学','福岡高校'],
            workHistory:['○○株式会社','▲▲株式会社'],
            languages:['日本語','英語'],
            skills:['プログラム','インフラ知識']
          },
          {
            jobOfferId : 2,
            //img_url:require('@/img/img_member01.png'),
            slides : [
                  ['img', require('@/img/img_member02.png')],
                  ['img', require('@/img/img_member03.png')],
                  ['img', require('@/img/img_member04.png')],
                  // ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],
                ],
            isGoodActive : false,
            isStarActive : false,
            icons : ['中堅','熟練'],
            name : '(2)H・O',
            age : '34歳',
            gender: 'men',
            place:'福岡県福岡市',
            desc:'ネットワークエンジニア、Webエンジニア、プログラマー',
            oneText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            workCategory:'通信業',
            workType:'正社員',
            detailText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、誰かのためになることをやりなさいと小さい頃祖母にいわれて育ちました。実際にこの言葉を実行している祖母の背中をみて育ち、私も同じように取り組み続けています。感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            purposeAndConditions:['しっかり固まった業務内容','シフト制','技術力・営業力','教育が充実'],
            personalityAndAttitude:['やる気と勢い','「まず、やってみよう」の精神','フットワークが軽い','新しいことが好き','突発残業OK'],
            educationalHistory:['福岡大学','福岡高校'],
            workHistory:['○○株式会社','▲▲株式会社'],
            languages:['日本語','英語'],
            skills:['プログラム','インフラ知識']
          },
          {
            jobOfferId : 3,
            //img_url:require('@/img/img_member01.png'),
            slides : [
                  ['img', require('@/img/img_member04.png')],
                  ['img', require('@/img/img_member05.png')],
                  ['img', require('@/img/img_member06.png')],
                  // ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],
                ],
            isGoodActive : false,
            isStarActive : false,
            icons : ['中堅','熟練'],
            name : '(3)H・O',
            age : '34歳',
            gender: 'women',
            place:'福岡県福岡市',
            desc:'ネットワークエンジニア、Webエンジニア、プログラマー',
            oneText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            workCategory:'通信業',
            workType:'正社員',
            detailText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、誰かのためになることをやりなさいと小さい頃祖母にいわれて育ちました。実際にこの言葉を実行している祖母の背中をみて育ち、私も同じように取り組み続けています。感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            purposeAndConditions:['しっかり固まった業務内容','シフト制','技術力・営業力','教育が充実'],
            personalityAndAttitude:['やる気と勢い','「まず、やってみよう」の精神','フットワークが軽い','新しいことが好き','突発残業OK'],
            educationalHistory:['福岡大学','福岡高校'],
            workHistory:['○○株式会社','▲▲株式会社'],
            languages:['日本語','英語'],
            skills:['プログラム','インフラ知識']
          },
          {
            jobOfferId : 4,
            //img_url:require('@/img/img_member01.png'),
            slides : [
                  ['img', require('@/img/img_member07.png')],
                  ['img', require('@/img/img_member08.png')],
                  ['img', require('@/img/img_member09.png')],
                  // ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],
                ],
            isGoodActive : false,
            isStarActive : false,
            icons : ['中堅','熟練'],
            name : '(4)H・O',
            age : '34歳',
            gender: 'women',
            place:'福岡県福岡市',
            desc:'ネットワークエンジニア、Webエンジニア、プログラマー',
            oneText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            workCategory:'通信業',
            workType:'正社員',
            detailText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、誰かのためになることをやりなさいと小さい頃祖母にいわれて育ちました。実際にこの言葉を実行している祖母の背中をみて育ち、私も同じように取り組み続けています。感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            purposeAndConditions:['しっかり固まった業務内容','シフト制','技術力・営業力','教育が充実'],
            personalityAndAttitude:['やる気と勢い','「まず、やってみよう」の精神','フットワークが軽い','新しいことが好き','突発残業OK'],
            educationalHistory:['福岡大学','福岡高校'],
            workHistory:['○○株式会社','▲▲株式会社'],
            languages:['日本語','英語'],
            skills:['プログラム','インフラ知識']
          },
          {
            jobOfferId : 5,
            //img_url:require('@/img/img_member01.png'),
            slides : [
                  ['img', require('@/img/img_member03.png')],
                  ['img', require('@/img/img_member07.png')],
                  ['img', require('@/img/img_member09.png')],
                  // ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],
                ],
            isGoodActive : false,
            isStarActive : false,
            icons : ['中堅','熟練'],
            name : '(5)H・O',
            age : '34歳',
            gender: 'women',
            place:'福岡県福岡市',
            desc:'ネットワークエンジニア、Webエンジニア、プログラマー',
            oneText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            workCategory:'通信業',
            workType:'正社員',
            detailText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、誰かのためになることをやりなさいと小さい頃祖母にいわれて育ちました。実際にこの言葉を実行している祖母の背中をみて育ち、私も同じように取り組み続けています。感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            purposeAndConditions:['しっかり固まった業務内容','シフト制','技術力・営業力','教育が充実'],
            personalityAndAttitude:['やる気と勢い','「まず、やってみよう」の精神','フットワークが軽い','新しいことが好き','突発残業OK'],
            educationalHistory:['福岡大学','福岡高校'],
            workHistory:['○○株式会社','▲▲株式会社'],
            languages:['日本語','英語'],
            skills:['プログラム','インフラ知識']
          },
          {
            jobOfferId : 6,
            //img_url:require('@/img/img_member01.png'),
            slides : [
                  ['img', require('@/img/img_member04.png')],
                  ['img', require('@/img/img_member08.png')],
                  ['img', require('@/img/img_member02.png')],
                  // ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],
                ],
            isGoodActive : false,
            isStarActive : false,
            icons : ['中堅','熟練'],
            name : '(6)H・O',
            age : '34歳',
            gender: 'women',
            place:'福岡県福岡市',
            desc:'ネットワークエンジニア、Webエンジニア、プログラマー',
            oneText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            workCategory:'通信業',
            workType:'正社員',
            detailText:'「一日一善」が私の座右の銘です。常に感謝の気持ちを忘れず、誰かのためになることをやりなさいと小さい頃祖母にいわれて育ちました。実際にこの言葉を実行している祖母の背中をみて育ち、私も同じように取り組み続けています。感謝の気持ちを忘れず、他人に奉仕する心を持って、チームのために働きたいと考えています。',
            purposeAndConditions:['しっかり固まった業務内容','シフト制','技術力・営業力','教育が充実'],
            personalityAndAttitude:['やる気と勢い','「まず、やってみよう」の精神','フットワークが軽い','新しいことが好き','突発残業OK'],
            educationalHistory:['福岡大学','福岡高校'],
            workHistory:['○○株式会社','▲▲株式会社'],
            languages:['日本語','英語'],
            skills:['プログラム','インフラ知識']
          },
      ],
      farvoriteItems:[],
      likeToItems:[]
  },
  mutations: {
    initalItems(state, items){
      state.items = items
    },
    addFarvoriteItems(state, item){
      state.farvoriteItems.push(item);
    },
    removeFarvoriteItems(state, jobOfferId){
      state.farvoriteItems = state.farvoriteItems.filter(item => item.jobOfferId != jobOfferId)
    },
    addLikeToItems(state, item){
      state.likeToItems.push(item);
    },
    updateStarActiveinItems(state, {jobOfferId, value}){
      // state.items[index].isStarActive = value
      state.items.find(item => item.jobOfferId == jobOfferId).isStarActive = value
    },
    updateGoodActiveinItems(state, {jobOfferId, value}){
      // state.items[index].isGoodActive = value
      state.items.find(item => item.jobOfferId == jobOfferId).isGoodActive = value
    }
  },
  actions: {
    initalItems({commit}, items){
      commit('initalItems', items)
    },
    addFarvoriteItems({commit}, item){
      commit('addFarvoriteItems', item)
    },
    removeFarvoriteItems({commit}, jobOfferId){
      commit('removeFarvoriteItems', jobOfferId)
    },
    addLikeToItems({commit}, item){
      commit('addLikeToItems', item)
    },
    updateStarActiveinItems({commit}, { jobOfferId, value }){
      commit('updateStarActiveinItems', { jobOfferId, value })
    },
    updateGoodActiveinItems({commit}, { jobOfferId, value }){
      commit('updateGoodActiveinItems', { jobOfferId, value })
    },
  },
  modules: {
  }
})
