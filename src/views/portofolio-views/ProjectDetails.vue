<template>
<p>{{ id }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ProjectDetails",
	data: function() { // for some reason this.$route can't be used with arrow function
		return {
			id: this.$route.params.id
		};
	}
});
</script>