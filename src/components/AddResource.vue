<template>
  <div class="Wrapper">
    <div class="Input">
      <input
        type="text"
        class="Input-text"
        name="resource"
        :placeholder="placeholder"
        v-model="searchTerm"
      />
    </div>
    <div id="Pop" v-if="searchResources.length">
      <p
        v-for="resource in searchResources"
        :key="resource.name"
        @click="
          selectResource(resource.name);
          hidden = true;
        "
        class="Autocomplete"
      >
        {{ resource.name }}
      </p>
    </div>
  </div>
</template>

<script>
import resources from "../data/resources.json";
import { ref, computed } from "vue";
export default {
  setup() {
    let searchTerm = ref("");
    const searchResources = computed(() => {
      if (searchTerm.value === "") {
        return [];
      }
      let matches = 0;
      return resources.filter((resource) => {
        if (
          resource.name.toLowerCase().includes(searchTerm.value.toLowerCase()) &&
          matches < 10
        ) {
          matches++;
          return resource;
        }
      });
    });
    const selectResource = (resource) => {
      localStorage.setItem("resource", JSON.stringify(resource));
      resource = "";
    };
    let selectedResource = ref("");
    return {
      resources,
      searchTerm,
      searchResources,
      selectResource,
      selectedResource,
    };
  },
  data() {
    return {
      placeholder: "Type here: e.g. MergeRequests",
    };
  },
};
</script>

<style scoped>
:root {
  --gutterMd: 0.8rem;
  --gutterLg: 1.6rem;
  --fontSizeLg: 2.1rem;
  --lineHeightMd: 1.8;
  --transitionDuration: 300ms;
  --transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);

  /* floated labels */
  --inputPaddingV: var(--gutterMd);
  --inputPaddingH: var(--gutterLg);
  --inputFontSize: var(--fontSizeLg);
  --inputLineHeight: var(--lineHeightMd);
  --labelScaleFactor: 0.8;
  --labelDefaultPosY: 50%;
  --labelTransformedPosY: calc(
    (var(--labelDefaultPosY)) - (var(--inputPaddingV) * var(--labelScaleFactor)) -
      (var(--inputFontSize) * var(--inputLineHeight))
  );
  --inputTransitionDuration: var(--transitionDuration);
  --inputTransitionTF: var(--transitionTF);
}

.Wrapper {
  flex: 0 0 80%;
  max-width: 80%;
}

.Input {
  position: relative;
}

.Input-text {
  display: block;
  margin: 0;
  padding: var(--inputPaddingV) var(--inputPaddingH);
  color: inherit;
  width: 100%;
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow var(--transitionDuration);
}

.Input-text::placeholder {
  color: #b0bec5;
}

.Input-text:focus {
  outline: none;
  box-shadow: 0.2rem 0.8rem 1.6rem var(--colorPrimary600);
}

.Input-label {
  display: block;
  position: absolute;
  bottom: 50%;
  left: 1rem;
  color: #fff;
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  opacity: 0;
  transform: translate3d(0, var(--labelDefaultPosY), 0) scale(1);
  transform-origin: 0 0;
  transition: opacity var(--inputTransitionDuration) var(--inputTransitionTF),
    transform var(--inputTransitionDuration) var(--inputTransitionTF),
    visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF),
    z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);
}

.Input-text:placeholder-shown + .Input-label {
  visibility: hidden;
  z-index: -1;
}

.Input-text:not(:placeholder-shown) + .Input-label,
.Input-text:focus:not(:placeholder-shown) + .Input-label {
  visibility: visible;
  z-index: 1;
  opacity: 1;
  transform: translate3d(0, var(--labelTransformedPosY), 0) scale(var(--labelScaleFactor));
  transition: transform var(--inputTransitionDuration), visibility 0ms, z-index 0ms;
}

.Autocomplete {
  background-color: #f5f5f5;
  font-size: large;
  padding-left: 5%;
}
</style>
