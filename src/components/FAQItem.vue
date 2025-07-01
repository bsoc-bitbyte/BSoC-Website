<template>
	<div :class="['faq', { open }]" @click="$emit('toggleOpen', index)">
		<div class="accordion-item">
			<div class="ani">
				<h2 class="accordion-header">
					<button
						class="accordion-button"
						:class="{ collapsed: !open }"
						type="button"
						:aria-expanded="open"
					>
						<div class="question">{{ faq.question }}</div>
					</button>
				</h2>

				<transition
					@before-enter="beforeEnter"
					@enter="enter"
					@after-enter="afterEnter"
					@before-leave="beforeLeave"
					@leave="leave"
					@after-leave="afterLeave"
				>
					<div
						v-show="open"
						ref="body"
						class="accordion-collapse transition-container"
					>
						<div class="accordion-body">
							<div class="answer" v-html="sanitizeHtml(faq.answer)"></div>
						</div>
					</div>
				</transition>
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
		beforeEnter(el) {
			el.style.maxHeight = '0'
			el.style.opacity = '0'
		},
		enter(el) {
			el.style.transition = 'max-height 0.4s ease, opacity 0.3s ease'
			el.style.maxHeight = el.scrollHeight + 'px'
			el.style.opacity = '1'
		},
		afterEnter(el) {
			el.style.maxHeight = 'none'
		},
		beforeLeave(el) {
			el.style.maxHeight = el.scrollHeight + 'px'
			el.style.opacity = '1'
		},
		leave(el) {
			void el.offsetHeight
			el.style.transition = 'max-height 0.4s ease, opacity 0.3s ease'
			el.style.maxHeight = '0'
			el.style.opacity = '0'
		},
		afterLeave(el) {
			el.style.maxHeight = ''
			el.style.opacity = ''
		},
	},
}
</script>

<style scoped>
* {
	box-sizing: border-box;
	background-color: var(--primary_bg_col);
	color: var(--font_col);
}

.question {
	color: var(--font_col);
	font-size: 23px;
	width: 80vw;
}

.answer {
	color: var(--font_col);
	transition: opacity 0.3s ease;
}

html,
body {
	font-family: system-ui, Poppins, sans-serif;
	font-size: 19px;
	line-height: 1.5;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background-color: var(--primary_bg_col);
}

.accordion-item {
	display: flex;
	justify-content: center;
	width: 100vw;
}

.ani {
	border-bottom: 1px var(--font_col) solid;
	width: 50vw;
}

.accordion-button {
	display: flex;
	align-items: center;
	padding: 10px;
	border: none;
	text-align: left;
	transition: background-color 0.4s ease;
	font-family: system-ui, Poppins, sans-serif;
	font-size: 1rem;
	color: var(--font_col);
	position: relative;
	width: 100%;
	background-color: var(--primary_bg_col);
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
	overflow: hidden;
}

.transition-container {
	transition:
		max-height 0.4s ease,
		opacity 0.3s ease;
}

.accordion-body {
	padding: 15px 10px;
	background-color: var(--primary_bg_col);
	font-size: 0.9rem;
	color: var(--font_col);
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
