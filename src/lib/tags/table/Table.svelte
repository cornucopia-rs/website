<script lang="ts">
	import { border_color } from '$lib/tags/table/border_color_table';
</script>

<!--The top margin is the same as the default one for a list-->
<div class="flex flex-col">
	<div class="sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full sm:px-6 lg:px-8">
			<div class="overflow-hidden">
				<table class="min-w-full border border-b-[0.12rem] {border_color} text-center">
					<thead class="border-b {border_color}">
						<tr class="border-b-4 border-r border-double {border_color}">
							<slot name="th" />
						</tr>
					</thead>

					<slot name="tbody" />
				</table>
			</div>
		</div>
	</div>
</div>
