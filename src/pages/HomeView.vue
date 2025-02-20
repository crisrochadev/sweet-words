<template>
  <div class="w-screen flex justify-center items-center h-screen">
    <div
      v-if="Object.keys(mainword).length"
      class="w-11/12 h-auto max-w-[400px]"
    >
      <div class="w-full justify-between items-center flex">
        <div class="flex relative items-center">
          <img src="/images/treat.svg" class="w-10 shadow-md" />
          <div
            class="shadow-md h-8 p-2 text-center flex items-center justify-center font-extrabold text-amber-800 border-t border-r border-b border-amber-300 rounded bg-white w-22"
          >
            {{ points }}
          </div>
        </div>
        <div class="flex relative items-center">
          <img src="/images/pencil.svg" class="w-10 shadow-md" />
          <div
            class="shadow-md h-8 p-2 text-center flex items-center justify-center font-extrabold text-amber-800 border-t border-r border-b border-amber-300 rounded bg-white w-22"
          >
            {{ level + 1 }}
          </div>
        </div>
      </div>
      <!-- Paravra principal -->
      <div
        class="w-full relative p-2 shadow-md rounded bg-amber-50 my-2 text-center"
        v-if="Object.keys(mainword).length"
      >
        <p>{{ mainwordhint }}</p>
        <div
          class="rounded-full shadow-md absolute -top-2 -right-2 p-2 bg-green-100 w-8 h-8 flex items-center font-extrabold text-green-500"
        >
          <img src="/images/treat.svg" class="w-2 shadow-md" />
          <span>5</span>
        </div>
        <div class="flex justify-center gap-1" ref="main_word">
          <div v-for="(letter, i) in mainwordlevel.word" :key="i">
            <div class="text-lg my-1">
              {{ shuffleEmojis[letter] }}
            </div>
            <input
              v-if="mainword[letter + i]"
              @input="inputMain(i, letter)"
              @keyup="(e) => backspaceLetter(e, letter, i)"
              :ref="`letter-${i}`"
              type="text"
              maxlength="1"
              :class="[mainword[letter + i].hit ? 'bg-green-500' : '']"
              class="w-10 h-10 rounded border border-amber-500 text-center font-extrabold uppercase text-amber-900"
              :readonly="mainword[letter + i].hit"
              v-model="mainword[letter + i].letter"
            />
          </div>
        </div>
      </div>
      <div
        class="w-full relative p-2 shadow-md rounded bg-amber-50 my-2 text-center"
      >
        <template v-for="ind in wordslevelwords" :key="ind">
          <div class="w-full text-center">
            <p>{{ this[`word${ind}hint`] }}</p>
            <div
              class="rounded-full shadow-md absolute -top-2 -right-2 p-2 bg-green-100 w-8 h-8 flex items-center font-extrabold text-green-500"
            >
              <img src="/images/treat.svg" class="w-2 shadow-md" />
              <span>5</span>
            </div>
            <div class="flex justify-center gap-1" ref="one_word">
              <div v-for="(letter, i) in this[`word${ind}level`].word" :key="i">
                <div>
                  {{ shuffleEmojis[letter] }}
                </div>
                <input
                  @input="inputWords(ind, i, letter)"
                  @keyup="(e) => backspaceLetters(e, ind, letter, i)"
                  :ref="`letter-words-${i}-${ind}`"
                  type="text"
                  class="w-10 h-10 rounded border border-amber-500 text-center font-extrabold uppercase text-amber-900"
                  maxlength="1"
                  :class="[
                    this[`word${ind}`][letter + i].hit ? 'bg-green-500' : '',
                  ]"
                  :readonly="this[`word${ind}`][letter + i].hit"
                  v-model="this[`word${ind}`][letter + i].letter"
                />
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { useStorage } from "@vueuse/core";
import useLetters from "../composables/shuffleLetters";
import levels from "../utils/words/levels.js";
import Swal from "sweetalert2";
export default {
  data() {
    const { shuffleEmojis } = useLetters();
    return {
      mainword: useStorage("mainword", {}),
      word1: useStorage("word1", {}),
      word2: useStorage("word2", {}),
      word3: useStorage("word3", {}),
      word4: useStorage("word4", {}),
      word5: useStorage("word5", {}),
      mainwordlevel: levels[0].main_word,
      mainwordhint: null,
      word1level: [],
      word2level: [],
      word3level: [],
      word4level: [],
      word5level: [],
      word1hint: useStorage("word1hint", null),
      word2hint: useStorage("word2hint", null),
      word3hint: useStorage("word3hint", null),
      word4hint: useStorage("word4hint", null),
      word5hint: useStorage("word5hint", null),
      wordslevelwords: [1, 2, 3, 4, 5],
      points: useStorage("points", 0),
      level: useStorage("level", 0),
      shuffleEmojis,
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    points(val) {
      if (val % 10 == 0) {
        this.level++;
        this.mainword = {};
        this.word1 = {};
        this.word2 = {};
        this.word3 = {};
        this.word4 = {};
        this.word5 = {};
        Swal.fire({
          title: "Custom width, padding, color, background.",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/bg.png)",
          backdrop: `
    rgba(0,0,123,0.4)
    url("/images/PYh.gif")
    left top
    no-repeat
  `,
        }).then(() => {
          this.init();
        });
      }
    },
  },
  methods: {
    init() {
      this.mainwordlevel = levels[this.level].main_word;
      this.word1level = levels[this.level].words[0];
      this.word2level = levels[this.level].words[1];
      this.word3level = levels[this.level].words[2];
      this.word4level = levels[this.level].words[3];
      this.word5level = levels[this.level].words[4];
      this.mainwordhint = this.mainwordlevel.hint;
      let mainword = new Map();
      this.mainwordlevel.word.forEach((letter, i) => {
        mainword.set(letter + i, {
          hit: false,
          letter: null,
        });
      });
      this.mainword = Object.fromEntries(mainword);
      console.log(this.mainword);
      for (let i = 1; i <= 5; i++) {
        let word = new Map();
        this[`word${i}hint`] = this[`word${i}level`].hint;
        this[`word${i}level`].word.forEach((letter, index) => {
          word.set(letter + index, {
            hit: false,
            letter: null,
          });
        });
        this[`word${i}`] = Object.fromEntries(word);
        console.log(this[`word${i}`]);
      }
    },
    nextInputWord(next, nextIndex, ind = 1) {
      nextIndex = 0;
      next = this.$refs[`letter-words-${nextIndex}-${ind}`];
      while (next && next.length && next[0].readonly) {
        nextIndex++;
        next = this.$refs[`letter-words-${nextIndex}-${ind}`];
      }
      if (next && next.length) next[0].focus();
      else {
        ind++;
        if (ind <= 5) {
          this.nextInputWord(next, nextIndex, ind);
        }
      }
    },
    inputMain(index, letter) {
      if (
        this.mainword[letter + index].letter.toLowerCase() ==
        letter.toLowerCase()
      ) {
        this.mainword[letter + index].hit = true;
      }
      if (Object.values(this.mainword).every((l) => l.hit)) {
        this.points += 5;
      }
      if (this.mainword[letter + index].letter.length == 1) {
        let nextIndex = index + 1;
        let next = this.$refs[`letter-${nextIndex}`];

        while (next && next.length && next[0].readonly) {
          nextIndex++;
          next = this.$refs[`letter-${nextIndex}`];
        }
        if (next && next.length) next[0].focus();
        else {
          this.nextInputWord(next, nextIndex);
        }
      }
    },
    backspaceLetter(e, letter, index) {
      if (e.key == "Backspace") {
        if (
          !this.mainword[letter + index].letter ||
          this.mainword[letter + index].letter.length == ""
        ) {
          let prevIndex = index - 1;
          let prev = this.$refs[`letter-${prevIndex}`];
          while (prev && prev.length && prev[0].readonly) {
            prevIndex--;
            prev = this.$refs[`letter-${prevIndex}`];
          }
          if (prev.length && prev) prev[0].focus();
        }
      }
    },
    inputWords(ind, index, letter) {
      if (
        this[`word${ind}`][letter + index].letter.toLowerCase() ==
        letter.toLowerCase()
      ) {
        this[`word${ind}`][letter + index].hit = true;
      }
      if (Object.values(this[`word${ind}`]).every((l) => l.hit)) {
        this.points += 1;
      }
      if (this[`word${ind}`][letter + index].letter.length == 1) {
        let nextIndex = index + 1;
        let next = this.$refs[`letter-words-${nextIndex}-${ind}`];
        console.log(next);
        while (next && next.length && next[0].readonly) {
          nextIndex++;
          next = this.$refs[`letter-words-${nextIndex}-${ind}`];
        }
        if (next && next.length) next[0].focus();
        else {
          nextIndex = 0;
          ind++;
          console.log(ind);
          next = this.$refs[`letter-words-${nextIndex}-${ind}`];
          console.log(next);
          while (next && next.length && next[0].readonly) {
            nextIndex++;
            next = this.$refs[`letter-words-${nextIndex}-${ind}`];
          }
          if (next && next.length) next[0].focus();
        }
      }
    },
    backspaceLetters(e, ind, letter, index) {
       if (e.key == "Backspace") {
        let prevIndex = index - 1;
        let prev = this.$refs[`letter-words-${prevIndex}-${ind}`];
        while (prev && prev.length && prev[0].readonly) {
          prevIndex--;
          prev = this.$refs[`letter-words-${prevIndex}-${ind}`];
        }
        if (prev && prev.length) prev[0].focus();
        else {
          ind--;
          if (this[`word${ind}`]) {
            prevIndex = Object.keys(this[`word${ind}`]).length - 1;
            prev = this.$refs[`letter-words-${prevIndex}-${ind}`];
            while (prev && prev.length && prev[0].readonly) {
              prevIndex--;
              prev = this.$refs[`letter-words-${prevIndex}-${ind}`];
            }
            if (prev && prev.length) prev[0].focus();
          } else {
            let prevIndex = Object.keys(this.mainword).length - 1;
            let prev = this.$refs[`letter-${prevIndex}`];
            while (prev && prev.length && prev[0].readonly) {
              prevIndex--;
              prev = this.$refs[`letter-${prevIndex}`];
            }
            if (prev.length && prev) prev[0].focus();
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
