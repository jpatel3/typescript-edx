class RecipeCategorySummary implements IRecipeCategorySummary {
	text: string;
	title: string;

	constructor(recipeCategorySummary: IRecipeCategorySummary){
		this.text = recipeCategorySummary.text;
		this.title = recipeCategorySummary.title;
	}
}