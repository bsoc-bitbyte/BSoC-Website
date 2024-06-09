<template>
	<div :class="open ? 'faq-open' : 'faq'" @click="$emit('toggleOpen', index)">
		<div class="arrquestion">
			<div class="question">
				<h5>{{ faq.question }}</h5>
			</div>
			<div class="arrow">
				<img src="../assets/white-down-arrow-png-2.png " width="30px" />
			</div>
		</div>
		<div class="answer" v-html="sanitizeHtml(faq.answer)"></div>
	</div>
</template>

<script>
import DOMPurify from 'dompurify'

export default {
	name: 'FAQ',
	props: ['faq', 'index', 'open'],
	methods: {
		sanitizeHtml(html) {
			return DOMPurify.sanitize(html)
		},
	},
}
</script>
