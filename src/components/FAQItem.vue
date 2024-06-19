<template>
	<div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
		<div class="accordion-item">
			<div class="ani">
				<h2 class="accordion-header" id="headingOne">
					<button
						class="accordion-button"
						:class="{ collapsed: !open }"
						type="button"
						aria-expanded="open"
						aria-controls="collapseOne"
					>
						<div class="question">
							{{ faq.question }}
						</div>
					</button>
				</h2>
				<div
					id="collapseOne"
					class="accordion-collapse"
					:class="{ collapse: !open, show: open }"
					aria-labelledby="headingOne"
					data-parent="#accordionExample"
				>
					<div class="accordion-body">
						<div class="answer" v-html="sanitizeHtml(faq.answer)"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DOMPurify from 'dompurify'

export default {
	name: 'FAQItem',
	props: ['faq', 'index', 'open'],
	methods: {
		sanitizeHtml(html) {
			return DOMPurify.sanitize(html)
		},
	},
}
</script>

<style scoped>
* {
	box-sizing: border-box;
	background-color: #19192a;
	color: white;
}
.question {
	color: white;
	font-size: 23px;
	width: 80vw;
}

.answer {
	color: white;
}

html,
body {
	font-family: 'Arial', sans-serif;
	font-size: 19px;
	line-height: 1.5;
	color: white;
	width: 100%;
	height: 100%;
	background-color: #19192a;
	margin: 0;
	padding: 0;
}

body {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

h1 {
	font-family: 'Nexa Black', sans-serif;
	font-weight: 700;
	font-size: 1.8rem;
	margin-bottom: 30px;
}

.accordion {
	width: 500px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
}

.ani {
	border-bottom: 1px white solid;
	width: 50vw;
}
.accordion-item {
	display: flex;
	justify-content: center;
	width: 100vw;
}

.accordion-button {
	display: flex;
	align-items: center;

	padding: 10px;
	background-color: #19192a;
	border: none;
	text-align: left;
	transition: background-color 0.4s ease;
	font-family: 'Nexa XBold', sans-serif;
	font-size: 1rem;
	color: white;
	position: relative;
}

.accordion-button.collapsed::after,
.accordion-button:not(.collapsed)::after {
	content: ' ';
	width: 30px;
	height: 26px;
	background-repeat: no-repeat;
	background-image: url('../assets/arrow-204-32.png');
	position: absolute;
	right: 0px;
	transform: scale(0.7);
	transition: all ease 0.4s;
}

.accordion-button:not(.collapsed)::after {
	transform: rotate(180deg) scale(0.7);
}

.accordion-collapse {
	border: none;
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.4s ease;
}

.show {
	max-height: 1000px;
	animation: expandAccordion ease 3s;
}

.accordion-body {
	padding: 15px 10px;
	background-color: #19192a;
}

.answer {
	font-size: 0.9rem;
	color: white;
}

@keyframes expandAccordion {
	from {
		max-height: 0;
	}
	to {
		max-height: 1000px;
	}
}
@media (max-width: 520px) {
	.ani {
		width: 90%;
	}
}

@media (max-width: 600px) and (min-width: 520px) {
	.ani {
		width: 68vw;
	}
}
</style>
