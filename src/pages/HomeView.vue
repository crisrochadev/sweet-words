<template>
  <div class="w-screen h-screen p-4">
    <div class="w-full max-w-[500px] mx-auto grid grid-cols-3 gap-4 h-[40px]">
      <div class="flex items-center w-full relative">
        <img
          src="/images/charge.svg"
          width="35px"
          class="absolute top-0 z-50"
        />
        <p
          class="shadow-md h-[30px] w-full rounded top-1 left-2 text-end pr-2 text-teal-500 font-extrabold border-2 border-teal-500 absolute"
        >
          {{ points }}
        </p>
      </div>
      <div class="flex items-center w-full relative">
        <img
          src="/images/pencil.svg"
          width="35px"
          class="absolute top-0 z-50"
        />
        <p
          class="shadow-md h-[30px] w-full rounded top-1 left-2 text-end pr-2 text-teal-500 font-extrabold border-2 border-teal-500 absolute"
        >
          00
        </p>
      </div>
      <div class="flex items-center w-full relative">
        <img src="/images/treat.svg" width="35px" class="absolute top-0 z-50" />
        <p
          class="shadow-md h-[30px] w-full rounded top-1 left-2 text-end pr-2 text-teal-500 font-extrabold border-2 border-teal-500 absolute"
        >
          00
        </p>
      </div>
    </div>
    <div
      class="w-full max-w-[500px] h-[100px] mx-auto my-4 gap-4 ] rounded shadow-md"
    >
      <p class="text-center">{{ levelPlay.main_word.hint }}</p>
      <div class="w-full p-2 flex justify-center gap-3 grid-wows-1 h-[80px]">
        <div
          v-for="(letter, i) in levelPlay.main_word.word"
          :key="letter"
          id="word-main"
          class="w-full h-full relative grid grid-cols-1 grid-rows-1 justify-center items-center"
        >
          <input
            @input="(e) => checkLetter(e, letter, 'main')"
            maxlength="1"
            :id="`main-letter-${i}`"
            class="flex items-center justify-center w-10 h-10 border-2 border-teal-500 rounded shadow-md text-teal-500 font-extrabold uppercase text-center"
          />
          <div class="text-center text-xl">
            {{ lettersEmojis[letter] }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-[calc(100%_-_180px)] bg-amber-50 rounded shadow-md p-2 max-w-[500px] mx-auto overflow-y-auto"
    >
      <div class="" v-for="(word, index) in levelPlay.words" :key="word.word">
        <p class="text-start">{{ word.hint }}</p>
        <div
          class="w-full p-2 flex justify-start gap-3 grid-wows-1 h-[80px]"
          :id="`word-${index}`"
        >
          <div
            v-for="(letter, i) in word.word"
            :key="letter"
            class="relative grid grid-cols-1 grid-rows-1 justify-center items-center"
          >
            <input
              :id="`word-${index}-letter-${i}`"
              @input="(e) => checkLetter(e, letter, index)"
              maxlength="1"
              class="flex items-center justify-center w-8 h-8 border-2 border-teal-500 rounded shadow-md text-teal-500 font-extrabold uppercase text-center"
            />
            <div class="text-center text-xl">
              {{ lettersEmojis[letter] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref, computed, watch } from "vue";
import levels from "../levels.js";
import useLetters from "../composables/shuffleLetters.js";

const { shuffleEmojis } = useLetters();
const wordsList = ref(levels);
const level = ref(1);
const levelPlay = computed(() => wordsList.value[level.value - 1]);
const lettersEmojis = ref(shuffleEmojis);
const words = ref({
  main: false,
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
});

const points = computed(() => {
  let point = 0;
  if (words.value.main) {
    point += 5;
  }

  if (words.value[0]) {
    point += 1;
  }
  if (words.value[1]) {
    point += 1;
  }
  if (words.value[2]) {
    point += 1;
  }
  if (words.value[3]) {
    point += 1;
  }
  if (words.value[4]) {
    point += 1;
  }
  return point;
});

watch(points, (newval) => {
  if (newval % 10 == 0) {
    level.value = level.value + 1;
    Array.from(document.querySelectorAll("input")).forEach((inp) => {
      inp.style.background = "transparent";
      inp.value = "";
      inp.removeAttribute("disabled");
    });
    Swal.fire({
      title: "Uhuu! Você passou de nível",
      text: "Vamos para o nível " + level.value,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
    });
  }
});
function checkLetter(e, letter) {
  const input = e.target;
  if (input.value.toLowerCase() == letter.toLowerCase()) {
    input.style.background = "#BCD269";
    input.setAttribute("disabled", "disabled");
    if (level.value < 3) {
      levelPlay.value.words.forEach((word, index) => {
        word.word.forEach((l, i) => {
          const letterEl = document.getElementById(`word-${index}-letter-${i}`);
          if (l.toLowerCase() == letter.toLowerCase()) {
            letterEl.style.background = "#BCD269";
            letterEl.value = l;
            letterEl.setAttribute("disabled", "disabled");
          }
        });
      });
      levelPlay.value.main_word.word.forEach((l, i) => {
        const letterEl = document.getElementById(`main-letter-${i}`);
        if (l.toLowerCase() == letter.toLowerCase()) {
          letterEl.style.background = "#BCD269";
          letterEl.value = l;
          letterEl.setAttribute("disabled", "disabled");
        }
      });
    }
  }
  let word = [];
  const mainWord = levelPlay.value.main_word.word.join("");
  const arrMain = Array.from(document.querySelectorAll(`#word-main input`));
  arrMain.forEach((elIn) => {
    if (elIn != "") {
      word.push(elIn.value.toLowerCase());
    }
  });
  let joinwordmain = word.join("");

  if (joinwordmain == mainWord) {
    words.value.main = true;
  }
  levelPlay.value.words.forEach((w, i) => {
    let allword = [];
    const word = levelPlay.value.words[i].word.join("");
    const arrword = Array.from(document.querySelectorAll(`#word-${i} input`));
    arrword.forEach((elIn) => {
      if (elIn != "") {
        allword.push(elIn.value.toLowerCase());
      }
    });
    let joinword = allword.join("");

    if (joinword == word) {
      words.value[i] = true;
    }
  });
}
</script>

<style lang="scss" scoped></style>
