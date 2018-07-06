<template>
  <div class="wrapper">
    <div class="matrix">
      <div class="row">
        <square :input="squares[0]" />
        <square :input="squares[1]" />
        <square :input="squares[2]" />
        <square :input="squares[3]" />
      </div>
      <div class="row">
        <square :input="squares[4]" />
        <square :input="squares[5]" />
        <square :input="squares[6]" />
        <square :input="squares[7]" />
      </div>
      <div class="row">
        <square :input="squares[8]" />
        <square :input="squares[9]" />
        <square :input="squares[10]" />
        <square :input="squares[11]" />
      </div>
      <div class="row">
        <square :input="squares[12]" />
        <square :input="squares[13]" />
        <square :input="squares[14]" />
        <square :input="squares[15]" />
      </div>
    </div>
  </div>
</template>

<script>
import Square from './Square';
import _ from 'lodash';

import C from 'assets/characters';

Array.range = function(n) {
  return Array.apply(null, Array(n)).map((x, i) => i);
};

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(n) {
    return Array.range(Math.ceil(this.length / n)).map((x, i) =>
      this.slice(i * n, i * n + n),
    );
  },
});

function text2dots(text) {
  const testArray = text.split('');

  const dots = _.flatten(
    testArray.map(char => C[char].dots.slice(0, C[char].width + 1)),
  );

  for (let i = 0; i < dots.length % 8; i++) {
    dots.push(0x00);
  }

  return dots;
}

export default {
  components: {
    Square,
  },

  props: {
    text: {
      type: String,
      default: 'Hello   world!',
    },
  },

  data() {
    return {
      squares: Array.from({ length: 16 }, () =>
        Array.from({ length: 8 }, () => 0x00),
      ),
    };
  },

  watch: {
    text(newText) {
      if (!newText) {
        return;
      }

      const text = text2dots(newText);
      text.chunk(8).forEach((square, i) => this.$set(this.squares, i, square));
    },
  },

  mounted() {
    if (!this.text) {
      return;
    }

    const text = text2dots(this.text);
    text.chunk(8).forEach((square, i) => {
      this.$set(this.squares, i, square);
    });
  },
};
</script>

<style lang="stylus" scoped>
@import '~variables';

.matrix {
    filter: drop-shadow(0 0 1em black);
  border: 5px solid $primary;
  background-color: $primary;
}
</style>
