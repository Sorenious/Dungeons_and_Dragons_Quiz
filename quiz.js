
function process()
{
	var survey = document.survey;
	var i = 0;
	var j = 0;
	var value = "-1";
	var race = "";
	var align = "";
	var primclass = "";
	var secclass = "";

	var dwarf = 0;
	var elf = 0;
	var halfelf = 0;
	var halfling = 0;
	var human = 0;
	var halforc = 0;
	var gnome = 0;

	var lg = 0;
	var ln = 0;
	var le = 0;
	var ng = 0;
	var nn = 0;
	var ne = 0;
	var cg = 0;
	var cn = 0;
	var ce = 0;
	var tie = -1;

	var lx = 0;
	var nx = 0;
	var cx = 0;
	var xg = 0;
	var xn = 0;
	var xe = 0;

	var fighter = 0;
	var ranger = 0;
	var paladin = 0;
	var mage = 0;
	var cleric = 0;
	var druid = 0;
	var thief = 0;
	var bard = 0;
	var monk = 0;

	var deitychk = 0;
	if (survey.deity.checked) deitychk = 1;
	var deity = "";

	for (i = 0; i < survey.q1.length; i++) if (survey.q1[i].checked) value = survey.q1[i].value;
	switch (value) {
		case "1": lg+=2; cg+=2; ng+=2; elf+=2; halfelf+=2; bard+=2; break;
		case "2": lg+=2; cg+=2; ng+=2; ln+=2; nn+=2; le+=2; dwarf+=2; paladin+=2; halforc+=2; break;
		case "3": ng+=2; ln+=2; nn+=2; druid+=2; ranger+=2; monk+=2; break;
		case "4": ln+=2; nn+=2; le+=2; dwarf+=2; break;
		case "5": le+=2; ne+=2; ce+=2; human+=2; mage+=2; fighter+=2; halforc+=2; break;
		case "6": cn+=2; le+=2; ne+=2; human+=2; halfling+=2; thief+=2; gnome+=2; }

	for (i = 0; i < survey.q2.length; i++) if (survey.q2[i].checked) value = survey.q2[i].value;
	switch (value) {
		case "1": lg++; cg++; ng++; elf++; halfelf++; bard++; break;
		case "2": lg++; cg++; ng++; ln++; nn++; le++; dwarf++; paladin++; halforc++; break;
		case "3": ng++; ln++; nn++; druid++; ranger++; monk++; break;
		case "4": ln++; nn++; le++; dwarf++; break;
		case "5": le++; ne++; ce++; human++; mage++; fighter++; halforc++; break;
		case "6": cn++; le++; ne++; human++; halfling++; thief++; gnome++; }

	for (i = 0; i < survey.q3.length; i++) if (survey.q3[i].checked) value = survey.q3[i].value;
	switch (value) {
                case "1": lg-=2; cg-=2; ng-=2; elf-=2; halfelf-=2; bard-=2; break;
                case "2": lg-=2; cg-=2; ng-=2; ln-=2; nn-=2; le-=2; dwarf-=2; paladin-=2; halforc-=2; break;
                case "3": ng-=2; ln-=2; nn-=2; druid-=2; ranger-=2; monk-=2; break;
                case "4": ln-=2; nn-=2; le-=2; dwarf-=2; break;
                case "5": le-=2; ne-=2; ce-=2; human-=2; mage-=2; fighter-=2; halforc-=2; break;
                case "6": cn-=2; le-=2; ne-=2; human-=2; halfling-=2; thief-=2; gnome-=2; }

	for (i = 0; i < survey.q4.length; i++) if (survey.q4[i].checked) value = survey.q4[i].value;
	switch (value) {
		case "1": dwarf+=2; halfling+=2; human+=2; break;
		case "2": elf+=2; halfelf+=2; break;
		case "3": human+=2; elf+=2; bard+=2; gnome+=2; break;
		case "4": halfling+=2; }

	for (i = 0; i < survey.q5.length; i++) if (survey.q5[i].checked) value = survey.q5[i].value;
	switch (value) {
		case "1": dwarf++; halfling++; human++; break;
		case "2": elf++; halfelf++; break;
		case "3": human++; elf++; bard++; gnome++; break;
		case "4": halfling++; }

	for (i = 0; i < survey.q6.length; i++) if (survey.q6[i].checked) value = survey.q6[i].value;
	switch (value) {
		case "1": elf++; halfelf++; mage++; cleric++; ranger++; monk++; gnome++; break;
		case "2": dwarf++; human++; halfling++; thief++; break;
		case "3": human++; halfelf++; bard++; halforc++; break;
		case "4": human++; fighter++; paladin++; halforc++; }

	for (i = 0; i < survey.q7.length; i++) if (survey.q7[i].checked) value = survey.q7[i].value;
	switch (value) {
                case "1": elf-=2; halfelf-=2; mage-=2; cleric-=2; ranger-=2; monk-=2; gnome-=2; break;
                case "2": dwarf-=2; human-=2; halfling-=2; thief-=2; break;
                case "3": human-=2; halfelf-=2; bard-=2; halforc-=2; break;
                case "4": human-=2; fighter-=2; paladin-=2; halforc-=2; }

	for (i = 0; i < survey.q8.length; i++) if (survey.q8[i].checked) value = survey.q8[i].value;
	switch (value) {
		case "1": fighter++; thief++; human++; le++; ne++; halforc++; break;
		case "2": cleric++; druid++; paladin++; elf++; lg++; monk++; break;
		case "3": human++; halfling++; halfelf++; ln++; break;
		case "4": human++; ln++; gnome++; }

	for (i = 0; i < survey.q9.length; i++) if (survey.q9[i].checked) value = survey.q9[i].value;
	switch (value) {
		case "1": human++; halfelf++; thief++; gnome++; break;
		case "2": dwarf++; gnome++; break;
		case "3": halfelf++; halfling++; ranger++; gnome++; halforc++; monk++; break;
		case "4": elf++; break;
		case "5": halfelf++; elf++; druid++; halforc++; monk++; }

	for (i = 0; i < survey.q10.length; i++) if (survey.q10[i].checked) value = survey.q10[i].value;
	switch (value) {
                case "1": human-=2; halfelf-=2; thief-=2; gnome-=2; break;
                case "2": dwarf-=2; gnome-=2; break;
                case "3": halfelf-=2; halfling-=2; ranger-=2; gnome-=2; halforc-=2; monk-=2; break;
                case "4": elf-=2; break;
                case "5": halfelf-=2; elf-=2; druid-=2; halforc-=2; monk-=2; }

	for (i = 0; i < survey.q11.length; i++) if (survey.q11[i].checked) value = survey.q11[i].value;
	switch (value) {
		case "1": ng++; cg++; cn++; halfling++; elf++; gnome++; break;
		case "2": lg++; ln++; le++; nn++; dwarf++; monk++; break;
		case "3": cg++; nn++; cn++; halfelf++; gnome++; break;
		case "4": cn++; ne++; ce++; human++; halforc++; }

	for (i = 0; i < survey.q12.length; i++) if (survey.q12[i].checked) value = survey.q12[i].value;
	switch (value) {
		case "1": lg++; ln++; le++; paladin++; monk++; break;
		case "2": lg++; ng++; nn++; ln++; gnome++; break;
		case "3": le++; ne++; break;
		case "4": ce++; break;
		case "5": cg++; nn++; fighter++; break;
		case "6": cg++; ng++; nn++; bard++; monk++; gnome++; break;
		case "7": cn++; nn++; monk++; druid++; }

	for (i = 0; i < survey.q13.length; i++) if (survey.q13[i].checked) value = survey.q13[i].value;
	switch (value) {
                case "1": lg-=2; ln-=2; le-=2; paladin-=2; monk-=2; break;
                case "2": lg-=2; ng-=2; nn-=2; ln-=2; gnome-=2; break;
                case "3": le-=2; ne-=2; break;
                case "4": ce-=2; break;
                case "5": cg-=2; nn-=2; fighter-=2; break;
                case "6": cg-=2; ng-=2; nn-=2; bard-=2; gnome-=2; monk-=2; break;
                case "7": cn-=2; nn-=2; monk-=2; druid-=2; }

	for (i = 0; i < survey.q14.length; i++) if (survey.q14[i].checked) value = survey.q14[i].value;
	switch (value) {
		case "1": fighter+=2; paladin+=2; ranger+=2; halforc+=2; break;
		case "2": thief+=2; mage+=2; elf+=2; break;
		case "3": mage+=2; cleric+=2; druid+=2; elf+=2; gnome+=2; break;
		case "4": ranger+=2; elf+=2; halfelf+=2; break;
		case "5": bard+=2; thief+=2; dwarf+=2; gnome+=2; break;
		case "6": mage+=2; druid+=2; halfling+=2; break;
		case "7": cleric+=2; fighter+=2; halfelf+=2; break;
		case "8": fighter+=2; human+=2; halforc+=2; break;
		case "9": fighter+=2; cleric+=2; dwarf+=2; break;
		case "10": fighter+=2; dwarf+=2; halforc+=2; break;
		case "11": fighter+=2; human+=2; break;
		case "12": cleric+=2; mage+=2; elf+=2; break;
		case "13": monk+=2; break;
		case "14": bard+=2; thief+=2; halfling+=2; gnome+=2; }

	for (i = 0; i < survey.q15.length; i++) if (survey.q15[i].checked) value = survey.q15[i].value;
	switch (value) {
		case "1": fighter++; paladin++; ranger++; halforc++; break;
		case "2": thief++; mage++; elf++; gnome++; break;
		case "3": mage++; cleric++; druid++; elf++; break;
		case "4": ranger++; elf++; halfelf++; break;
		case "5": bard++; thief++; dwarf++; gnome++; break;
		case "6": mage++; druid++; halfling++; break;
		case "7": cleric++; fighter++; halfelf++; break;
		case "8": fighter++; human++; halforc++; break;
		case "9": fighter++; cleric++; dwarf++; break;
		case "10": fighter++; dwarf++; halforc++; break;
		case "11": fighter++; human++; break;
		case "12": cleric++; mage++; elf++; break;
		case "13": monk++; break;
		case "14": bard++; thief++; halfling++; gnome++; }

	for (i = 0; i < survey.q16.length; i++) if (survey.q16[i].checked) value = survey.q16[i].value;
	switch (value) {
            case "1": fighter-=2; paladin-=2; ranger-=2; halforc-=2; break;
            case "2": thief-=2; mage-=2; elf-=2; gnome-=2; break;
            case "3": mage-=2; cleric-=2; druid-=2; elf-=2; break;
            case "4": ranger-=2; elf-=2; halfelf-=2; break;
            case "5": bard-=2; thief-=2; dwarf-=2; gnome-=2; break;
            case "6": mage-=2; druid-=2; halfling-=2; break;
            case "7": cleric-=2; fighter-=2; halfelf-=2; break;
            case "8": fighter-=2; human-=2; halforc-=2; break;
            case "9": fighter-=2; cleric-=2; dwarf-=2; break;
            case "10": fighter-=2; dwarf-=2; halforc-=2; break;
            case "11": fighter-=2; human-=2; break;
            case "12": cleric-=2; mage-=2; elf-=2; break;
		case "13": monk-=2; break;
            case "14": bard-=2; thief-=2; halfling-=2; gnome-=2; }

	for (i = 0; i < survey.q17.length; i++) if (survey.q17[i].checked) value = survey.q17[i].value;
	switch (value) {
		case "1": elf++; mage++; bard++; break;
		case "2": halfling++; halfelf++; dwarf++; thief++; break;
		case "3": human++; dwarf++; fighter++; break;
		case "4": halfelf++; halfling++; druid++; ranger++; cleric++; paladin++; }

	for (i = 0; i < survey.q18.length; i++) if (survey.q18[i].checked) value = survey.q18[i].value;
	switch (value) {
                case "1": elf-=2; mage-=2; bard-=2; break;
                case "2": halfling-=2; halfelf-=2; dwarf-=2; thief-=2; break;
                case "3": human-=2; dwarf-=2; fighter-=2; break;
                case "4": halfelf-=2; halfling-=2; druid-=2; ranger-=2; cleric-=2; paladin-=2; }

	for (i = 0; i < survey.q19.length; i++) if (survey.q19[i].checked) value = survey.q19[i].value;
	switch (value) {
		case "1": ne++; ce++; thief++; break;
		case "2": lg++; ln++; le++; break;
		case "3": lg++; ng++; cg++; paladin++; cleric++; fighter++; ranger++; monk++; break;
		case "4": nn++; cn++; }

	for (i = 0; i < survey.q20.length; i++) if (survey.q20[i].checked) value = survey.q20[i].value;
	switch (value) {
		case "1": cg+=2; cn+=2; nn+=2; ne+=2; ranger+=2; bard+=2; thief+=2; mage+=2; elf+=2; halfelf+=2; gnome+=2; break;
		case "2": lg+=2; ln+=2; le+=2; fighter+=2; ranger+=2; paladin+=2; cleric+=2; dwarf+=2; human+=2; halforc+=2; break;
		case "3": cg+=2; cn+=2; ce+=2; ranger+=2; druid+=2; elf+=2; break;
		case "4": lg+=2; ng+=2; cg+=2; ln+=2; nn+=2; fighter+=2; ranger+=2; human+=2; halfelf+=2; break;
		case "5": le+=2; ne+=2; ce+=2; mage+=2; break;
		case "6": lg+=2; ng+=2; cg+=2; mage+=2; break;
		case "7": cg+=2, nn+=2; cn+=2; mage+=2; cleric+=2; human+=2; dwarf+=2; break;
		case "8": lg+=2; ng+=2; cg+=2; mage+=2; cleric+=2; druid+=2; ranger+=2; elf+=2; halfelf+=2; human+=2; monk+=2; break;
		case "9": cg+=2; nn+=2; ranger+=2; druid+=2; mage+=2; halfelf+=2; human+=2; break;
		case "10": cn+=2; nn+=2; halfling+=2; }

	for (i = 0; i < survey.q21.length; i++) if (survey.q21[i].checked) value = survey.q21[i].value;
	switch (value) {
		case "1": cg++; cn++; nn++; ne++; ranger++; bard++; thief++; mage++; elf++; halfelf++; gnome++; break;
		case "2": lg++; ln++; le++; fighter++; ranger++; paladin++; cleric++; dwarf++; human++; halforc++; break;
		case "3": cg++; cn++; ce++; ranger++; druid++; elf++; break;
		case "4": lg++; ng++; cg++; ln++; nn++; fighter++; ranger++; human++; halfelf++; break;
		case "5": le++; ne++; ce++; mage++; break;
		case "6": lg++; ng++; cg++; mage++; break;
		case "7": cg++, nn++; cn++; mage++; cleric++; human++; dwarf++; break;
		case "8": lg++; ng++; cg++; mage++; cleric++; druid++; ranger++; elf++; halfelf++; human++; monk++; break;
		case "9": cg++; nn++; ranger++; druid++; mage++; halfelf++; human++; break;
		case "10": cn++; nn++; halfling++; }

	for (i = 0; i < survey.q22.length; i++) if (survey.q22[i].checked) value = survey.q22[i].value;
	switch (value) {
		case "1": cg-=2; cn-=2; nn-=2; ne-=2; ranger-=2; bard-=2; thief-=2; mage-=2; elf-=2; halfelf-=2; gnome-=2; break;
		case "2": lg-=2; ln-=2; le-=2; fighter-=2; ranger-=2; paladin-=2; cleric-=2; dwarf-=2; human-=2; halforc-=2; break;
		case "3": cg-=2; cn-=2; ce-=2; ranger-=2; druid-=2; elf-=2; break;
		case "4": lg-=2; ng-=2; cg-=2; ln-=2; nn-=2; fighter-=2; ranger-=2; human-=2; halfelf-=2; break;
		case "5": le-=2; ne-=2; ce-=2; mage-=2; break;
		case "6": lg-=2; ng-=2; cg-=2; mage-=2; break;
		case "7": cg-=2, nn-=2; cn-=2; mage-=2; cleric-=2; human-=2; dwarf-=2; break;
		case "8": lg-=2; ng-=2; cg-=2; mage-=2; cleric-=2; druid-=2; ranger-=2; elf-=2; halfelf-=2; human-=2; monk-=2; break;
		case "9": cg-=2; nn-=2; ranger-=2; druid-=2; mage-=2; halfelf-=2; human-=2; break;
		case "10": cn-=2; nn-=2; halfling-=2; }

	for (i = 0; i < survey.q23.length; i++) if (survey.q23[i].checked) value = survey.q23[i].value;
	switch (value) {
		case "1": cleric++; ranger++; druid++; paladin++; monk++; break;
		case "2": mage++; bard++; elf++; human++; break;
		case "3": ranger++; druid++; elf++; halfelf++; break;
		case "4": fighter++; paladin++; ranger++; human++; break;
		case "5": bard++; break;
		case "6": halfling++; break;
		case "7": ranger++; druid++; dwarf++; break;
		case "8": dwarf++; gnome++; break;
		case "9": thief++; }

	for (i = 0; i < survey.q24.length; i++) if (survey.q24[i].checked) value = survey.q24[i].value;
	switch (value) {
            case "1": cleric-=2; ranger-=2; druid-=2; paladin-=2; monk-=2; break;
            case "2": mage-=2; bard-=2; elf-=2; human-=2; break;
            case "3": ranger-=2; druid-=2; elf-=2; halfelf-=2; break;
            case "4": fighter-=2; paladin-=2; ranger-=2; human-=2; break;
            case "5": bard-=2; break;
            case "6": halfling-=2; break;
            case "7": ranger-=2; druid-=2; dwarf-=2; break;
		case "8": dwarf-=2; gnome-=2; break;
            case "9": thief-=2; }

	for (i = 0; i < survey.q25.length; i++) if (survey.q25[i].checked) value = survey.q25[i].value;
	switch (value) {
		case "1": fighter++; paladin++; human++; dwarf++; cn++; ne++; le++; halforc++; break;
		case "2": ranger++; druid++; elf++; halfelf++; halfling++; cg++; ng++; nn++; ne++; gnome++; break;
		case "3": mage++; bard++; elf++; halfelf++; halfling++; lg++; ng++; ln++; nn++; le++; ne++; gnome++; break;
		case "4": cleric++; paladin++; human++; elf++; lg++; ng++; cg++; ln++; monk++; break;
		case "5": cleric++; thief++; human++; dwarf++; cn++; le++; ne++; ce++; break;
		case "6": thief++; elf++; dwarf++; ln++; nn++; cn++; monk++; break;
		case "7": mage++; cleric++; elf++; halfling++; break;
		case "8": ranger++; druid++; halfling++; elf++; halfelf++; monk++; cleric++; ng++; ne++; ne++; }

	for (i = 0; i < survey.q26.length; i++) if (survey.q26[i].checked) value = survey.q26[i].value;
	switch (value) {
            case "1": fighter-=2; paladin-=2; human-=2; dwarf-=2; cn-=2; ne-=2; le-=2; halforc-=2; break;
            case "2": ranger-=2; druid-=2; elf-=2; halfelf-=2; halfling-=2; cg-=2; ng-=2; nn-=2; ne-=2; gnome-=2; break;
            case "3": mage-=2; bard-=2; elf-=2; halfelf-=2; halfling-=2; lg-=2; ng-=2; ln-=2; nn-=2; le-=2; ne-=2; gnome-=2; break;
            case "4": cleric-=2; paladin-=2; human-=2; elf-=2; lg-=2; ng-=2; cg-=2; ln-=2; monk-=2; break;
            case "5": cleric-=2; thief-=2; human-=2; dwarf-=2; cn-=2; le-=2; ne-=2; ce-=2; break;
            case "6": thief-=2; elf-=2; dwarf-=2; ln-=2; nn-=2; cn-=2; monk-=2; break;
		case "7": mage-=2; cleric-=2; elf-=2; halfling-=2; break;
		case "8": ranger-=2; druid-=2; halfling-=2; elf-=2; halfelf-=2; monk-=2; cleric-=2; ng-=2; ne-=2; ne-=2; }

	for (i = 0; i < survey.q27.length; i++) if (survey.q27[i].checked) value = survey.q27[i].value;
	switch (value) {
		case "1": halfling++; ln++; gnome++; break;
		case "2": halfelf++; elf++; ranger++; druid++; break;
		case "3": human++; fighter++; paladin++; halforc++; break;
		case "4": dwarf++; human++; thief++; break;
		case "5": elf++; mage++; cleric++; monk++; }

	for (i = 0; i < survey.q28.length; i++) if (survey.q28[i].checked) value = survey.q28[i].value;
	switch (value) {
            case "1": halfling-=2; ln-=2; gnome-=2; break;
            case "2": halfelf-=2; elf-=2; ranger-=2; druid-=2; break;
            case "3": human-=2; fighter-=2; paladin-=2; halforc-=2; break;
            case "4": dwarf-=2; human-=2; thief-=2; break;
            case "5": elf-=2; mage-=2; cleric-=2; monk-=2; }

	for (i = 0; i < survey.q29.length; i++) if (survey.q29[i].checked) value = survey.q29[i].value;
	switch (value) {
		case "1": paladin++; human++; dwarf++; lg++; ln++; le++; break;
		case "2": ranger++; elf++; halfelf++; break;
		case "3": mage++; druid++; thief++; elf++; gnome++; halfling++; break;
		case "4": fighter++; human++; halforc++; break;
		case "5": cleric++; druid++; ranger++; monk++; break;
		case "6": monk++; druid++; ranger++; thief++; break;
		case "7": thief++; ne++; ce++; }

	for (i = 0; i < survey.q30.length; i++) if (survey.q30[i].checked) value = survey.q30[i].value;
	switch (value) {
		case "1": thief++; human++; dwarf++; halforc++; break;
		case "2": fighter++; paladin++; ranger++; human++; halforc++; break;
		case "3": mage++; thief++; elf++; gnome++; break;
		case "4": cleric++; monk++; break;
		case "5": bard++; thief++; break;
		case "6": ranger++; druid++; elf++; halfelf++; break;
		case "7": mage++; }

	for (i = 0; i < survey.q31.length; i++) if (survey.q31[i].checked) value = survey.q31[i].value;
	switch (value) {
		case "1": thief++; ne++; ce++; break;
		case "2": ln++; lg++; le++; break;
		case "3": cleric++; paladin++; lg++; break;
		case "4": cleric++; paladin++; monk++; break;
		case "5": le++; break;
		case "6": cn++; fighter++; }

	for (i = 0; i < survey.q32.length; i++) if (survey.q32[i].checked) value = survey.q32[i].value;
	switch (value) {
		case "1": thief++; bard++; halfling++; gnome++; break;
		case "2": thief++; le++; ne++; ce++; break;
		case "3": fighter++; human++; halforc++; dwarf++; break;
		case "4": mage++; bard++; break;
		case "5": cleric++; monk++; break;
		case "6": mage++; break;
		case "7": thief++; bard++; break;
		case "8": paladin++; break;
		case "9": ranger++; thief++; elf++; halfelf++; }
		
	for (i = 0; i < survey.q33.length; i++) if (survey.q33[i].checked) value = survey.q33[i].value;
	switch (value) {
		case "1": bard++; break;
		case "2": thief++; ne++; ce++; break;
		case "3": cleric++; paladin++; monk++; lg++; ln++; ng++; break;
		case "4": mage++; bard++; break;
		case "5": thief++; mage++; fighter++; break;
		case "6": fighter++; break;
		case "7": paladin++; break;
		case "8": druid++; ranger++; }

	i = human;
	race = "human";
	if (elf > i) { race = "elf"; i = elf; }
	if (halfelf > i) { race = "halfelf"; i = halfelf; }
	if (dwarf > i) { race = "dwarf"; i = dwarf; }
	if (halfling > i) { race = "halfling"; i = halfling; }
	if (halforc > i) { race = "halforc"; i = halforc; }
	if (gnome > i) { race = "gnome"; i = gnome; }


	lx = lg + ln + le;
	nx = ng + nn + ne;
	cx = cg + cn + ce;

	xg = lg + ng + cg;
	xn = ln + nn + cn;
	xe = le + ne + ce;

	i = nn;
	align = "nn";
	if (lg > i) { align = "lg"; i = lg; }
	if (ng > i) { align = "ng"; i = ng; }
	if (cg > i) { align = "cg"; i = cg; }
	if (ln > i) { align = "ln"; i = ln; }
	if (cn > i) { align = "cn"; i = cn; }
	if (le > i) { align = "le"; i = le; }
	if (ne > i) { align = "ne"; i = ne; }
	if (ce > i) { align = "ce"; i = ce; }

	if (lg==i) tie++;
	if (ng==i) tie++;
	if (cg==i) tie++;
	if (ln==i) tie++;
	if (nn==i) tie++;
	if (cn==i) tie++;
	if (le==i) tie++;
	if (ne==i) tie++;
	if (ce==i) tie++;

	if (tie != 0) {
		if (lx>nx&&lx>cx) align = "l";
		else if (cx>nx&&cx>lx) align = "c";
		else align ="n";

		if (xg>xe&&xg>xn) align += "g";
		else if (xe>xn&&xe>xg) align += "e";
		else align +="n"; }

	i = fighter;
	primclass = "fighter";
	if (ranger > i) { primclass = "ranger"; i = ranger; }
	if (paladin > i) { primclass = "paladin"; i = paladin; }
	if (mage > i) { primclass = "mage"; i = mage; }
	if (cleric > i) { primclass = "cleric"; i = cleric; }
	if (druid > i) { primclass = "druid"; i = druid; }
	if (thief > i) { primclass = "thief"; i = thief; }
	if (monk > i) { primclass = "monk"; i = monk; }
	if (bard > i) { primclass = "bard"; i = bard; }

	j = 0;
	secclass = primclass;
	if (fighter > j && fighter <= i && primclass != "fighter") { secclass = "fighter"; j = fighter; }
	if (ranger > j && ranger <= i && primclass != "ranger") { secclass = "ranger"; j = ranger; }
	if (paladin > j && paladin <= i && primclass != "paladin") { secclass = "paladin"; j = paladin; }
	if (mage > j && mage <= i && primclass != "mage") { secclass = "mage"; j = mage; }
	if (cleric > j && cleric <= i && primclass != "cleric") { secclass = "cleric"; j = cleric; }
	if (druid > j && druid <= i && primclass != "druid") { secclass = "druid"; j = druid; }
	if (thief > j && thief <= i && primclass != "thief") { secclass = "thief"; j = thief; }
	if (monk > j && monk <= i && primclass != "monk") { secclass = "monk"; j = monk; }
	if (bard > j && bard <= i && primclass != "bard") { secclass = "bard"; }

	if (secclass == primclass) { secclass="none"; }

	if (primclass=="ranger"||primclass=="cleric"||primclass=="paladin"||primclass=="druid"||primclass=="monk") deitychk = 1;
	if (secclass=="ranger"||secclass=="cleric"||secclass=="paladin"||secclass=="druid"||primclass=="monk") deitychk = 1;

	if (deitychk == 1) {

		switch (align) {
			case "lg": 
				if (primclass=="mage") {deity="mystra";}
				else if ((primclass=="ranger"||primclass=="druid")&&race=="gnome") {deity="baervan_wildwanderer";}
				else if (race=="gnome"&&(primclass=="fighter"||primclass=="paladin")) {deity="gaerdal_ironhand";}
				else if (race=="gnome") {deity="garl_glittergold";}
				else if (primclass=="ranger"||primclass=="druid") {deity="mielikki";}
				else if (race=="dwarf") {deity="moradin";}
				else if (race=="halfling") {deity="avoreen";}
				else if (primclass=="bard") {deity="oghma";}
				else {deity="tyr";}
				break;
			case "ng":
				if (primclass=="mage") {deity="mystra";}
				else if (primclass=="bard") {deity="oghma";}
				else if ((primclass=="ranger"||primclass=="druid")&&race=="gnome") {deity="baervan_wildwanderer";}
				else if (race=="gnome") {deity="flandal_steelskin";}
				else if (primclass=="ranger"||primclass=="druid") {deity="mielikki";}
				else if (race=="dwarf") {deity="marthammor_duin";}
				else {deity="lathander";}
				break;
			case "cg":
				if (primclass=="mage"&&(race=="halfelf"||race=="elf")) {deity="sehanine_moonbow";}
				else if (primclass=="mage") {deity="mystra";}
				else if ((primclass=="ranger"||primclass=="druid")&&race=="gnome") {deity="baervan_wildwanderer";}
				else if (primclass=="ranger"&&(race=="halfelf"||race=="elf")) {deity="solonor_thelandria";}
				else if (primclass=="druid"&&(race=="halfelf"||race=="elf")) {deity="rillifane_rallathil";}
				else if (primclass=="bard"&&(race=="halfelf"||race=="elf")) {deity="hanali_cenanil";}
				else if (primclass=="bard") {deity="finder_wyvernspur";}
				else if (primclass=="ranger"||primclass=="druid") {deity="shaundakul";}
				else if (race=="dwarf") {deity="dugmaren_brightmantle";}
				else {deity="tymora";}
				break;
			case "ln":
				if (primclass=="thief"&&race=="halfling") {deity="brandobaris";}
				else if (race=="halfling") {deity="urogalan";}
				else if (primclass=="ranger"||primclass=="druid") {deity="silvanus";}
				else if (primclass=="mage") {deity="azuth";}
				else if (race=="gnome") {deity="callarduran_smoothhands";}
				else {deity="helm";}
				break;
			case "nn":
				if (race=="dwarf") {deity="dumathoin";}
				else if (primclass=="thief"&&race=="halfling") {deity="brandobaris";}
				else if (primclass=="mage") {deity="azuth";}
				else if (primclass=="ranger"||primclass=="druid") {deity="silvanus";}
				else if (race=="gnome") {deity="callarduran_smoothhands";}
				else if (race=="halfling") {deity="sheela_peryroyl";}
				else {deity="gond";}
				break;
			case "cn":
				if (race=="elf"&&(primclass=="thief"||primclass=="bard")) {deity="erevan_ilesere";}
				else if (primclass=="mage") {deity="azuth";}
				else if (primclass=="ranger"||primclass=="druid") {deity="silvanus";}
				else if (race=="elf") {deity="fenmarel_mestarine";}
				else if (primclass=="bard") {deity="finder_wyvernspur";}
				else if (primclass=="thief"&&race=="halfling") {deity="brandobaris";}
				else if (race=="halfling") {deity="sheela_peryroyl";}
				else if (race=="gnome") {deity="callarduran_smoothhands";}
				else if (primclass=="paladin"||primclass=="fighter") {deity="tempus";}
				else {deity="beshaba";}
				break;
			case "le":
				if (primclass=="mage") {deity="velsharoon";}
				else if (primclass=="thief") {deity="mask";}
				else if (race=="dwarf") {deity="abbathor";}
				else if (race=="gnome") {deity="urdlen";}
				else {deity="iyachtu_xvim";}
				break;
			case "ne":
				if (primclass=="mage") {deity="velsharoon";}
				else if (primclass=="thief") {deity="mask";}
				else if (race=="dwarf") {deity="abbathor";}
				else if (race=="gnome") {deity="urdlen";}
				else {deity="cyric";}
				break;
			case "ce":
				if (primclass=="mage") {deity="velsharoon";}
				else if (primclass=="thief") {deity="mask";}
				else if (primclass=="bard") {deity="beshaba";}
				else if (race=="dwarf") {deity="abbathor";}
				else if (race=="gnome") {deity="urdlen";}
				else {deity="talos";}
		}
	}

	var win = window.open("", "win","width=750,height=800,top=100,left=100,scrollbars=yes,resizable=yes");
	with (win.document) {
		open("text/html", "replace");

		write("<html><head><title>Your Results Are In!\<\/title>\<\/head>");
                write("<body text='#ffffff' link='#ff5555' vlink='#ee6666' bgcolor='#885522' background='http://neppyman.irulethe.net/bk299.gif'>");

		write("<center><h2><b><font color='#ff5555'>You Are A:\<\/font>\<\/b>\<\/h2>\<\/center>");
		write("<br><center><h1><b>");

		switch (align) {
			case "lg": write("Lawful Good "); break;
			case "ng": write("Neutral Good "); break;
			case "cg": write("Chaotic Good "); break;
			case "ln": write("Lawful Neutral "); break;
			case "nn": write("True Neutral "); break;
			case "cn": write("Chaotic Neutral "); break;
			case "le": write("Lawful Evil "); break;
			case "ne": write("Neutral Evil "); break;
			case "ce": write("Chaotic Evil "); }

		switch (race) {
			case "human": write("Human"); break;
			case "halfling": write("Halfling"); break;
			case "elf": write("Elf"); break;
			case "halfelf": write("Half-Elf"); break;
			case "gnome": write("Gnome"); break;
			case "halforc": write("Half-Orc"); break;
			case "dwarf": write("Dwarf"); }

		switch (primclass) {
			case "fighter": write(" Fighter"); break;
			case "ranger": write(" Ranger"); break;
			case "paladin": write(" Paladin"); break;
			case "mage": write(" Mage"); break;
			case "cleric": write(" Cleric"); break;
			case "druid": write(" Druid"); break;
			case "thief": write(" Thief"); break;
			case "monk": write(" Monk"); break;
			case "bard": write(" Bard"); }

		switch (secclass) {
			case "fighter": write(" Fighter"); break;
			case "ranger": write(" Ranger"); break;
			case "paladin": write(" Paladin"); break;
			case "mage": write(" Mage"); break;
			case "cleric": write(" Cleric"); break;
			case "druid": write(" Druid"); break;
			case "thief": write(" Thief"); break;
			case "monk": write(" Monk"); break;
			case "none": write(""); break;
			case "bard": write(" Bard"); }

		write("\<\/h1>");

		if (deitychk==1) {

			write("<h2>Follower Of ");
			switch (deity) {
				case "tyr": write("Tyr"); break;
				case "avoreen": write("Avoreen"); break;
				case "moradin": write("Moradin"); break;
				case "lathander": write("Lathander"); break;
				case "mystra": write("Mystra"); break;
				case "oghma": write("Oghma"); break;
				case "mielikki": write("Mielikki"); break;
				case "marthammor_duin": write("Marthammor Duin"); break;
				case "tymora": write("Tymora"); break;
				case "finder_wyvernspur": write("Finder Wyvernspur"); break;
				case "shaundakul": write("Shaundakul"); break;
				case "hanali_cenanil": write("Hanali Cenanil"); break;
				case "solonor_thelandria": write("Solonor Thelandria"); break;
				case "rillifane_rallathil": write("Rillifane Rallathil"); break;
				case "helm": write("Helm"); break;
				case "azuth": write("Azuth"); break;
				case "urogalan": write("Urogalan"); break;
				case "gond": write("Gond"); break;
				case "silvanus": write("Silvanus"); break;
				case "sheela_peryroyl": write("Sheela Peryroyl"); break;
				case "brandobaris": write("Brandobaris"); break;
				case "dumathoin": write("Dumathoin"); break;
				case "beshaba": write("Beshaba"); break;
				case "tempus": write("Tempus"); break;
				case "fenmarel_mestarine": write("Fenmarel Mestarine"); break;
				case "erevan_ilesere": write("Erevan Ilesere"); break;
				case "iyachtu_xvim": write("Iyachtu Xvim"); break;
				case "cyric": write("Cyric"); break;
				case "mask": write("Mask"); break;
				case "abbathor": write("Abbathor"); break;
				case "velsharoon": write("Velsharoon"); break;
				case "talos": write("Talos"); break;
				case "garl_glittergold": write("Garl Glittergold"); break;
				case "gaerdal_ironhand": write("Gaerdal Ironhand"); break;
				case "baervan_wildwanderer": write("Baervan Wildwanderer"); break;
				case "flandal_steelskin": write("Flandal Steelskin"); break;
				case "callarduran_smoothhands": write("Calladuran Smoothhands"); break;
				case "urdlen": write("Urdlen");
			}
			write("\<\/h2>");
		}

		write("\<\/b>\<\/center><br><u>Alignment:\<\/u><br><b>");

		switch (align) {
			case "lg": write("Lawful Good\<\/b> characters are the epitome of all that is just and good.  They believe in order and governments that work for the benefit of all, and generally do not mind doing direct work to further their beliefs."); break;
			case "ng": write("Neutral Good\<\/b> characters believe in the power of good above all else.  They will work to make the world a better place, and will do whatever is necessary to bring that about, whether it goes for or against whatever is considered 'normal'."); break;
			case "cg": write("Chaotic Good\<\/b> characters are independent types with a strong belief in the value of goodness.  They have little use for governments and other forces of order, and will generally do their own things, without heed to such groups."); break;
			case "ln": write("Lawful Neutral\<\/b> characters believe in the triumph of law and order above all else.  It does not matter whether the leader is for good or evil; the leader will be followed, because the order they provide is the most important thing."); break;
			case "nn": write("True Neutral\<\/b> characters are very rare.  They believe that balance is the most important thing, and will not side with any other force.  They will do whatever is necessary to preserve that balance, even if it means switching allegiances suddenly."); break;
			case "cn": write("Chaotic Neutral\<\/b> characters are unstable, and frequently insane.  They believe in disorder first and foremost, and will thus strive for that disorder in everything they do. This means that they will do whatever seems 'fun' or 'novel' at any given time."); break;
			case "le": write("Lawful Evil\<\/b> characters believe that a nice, orderly system of life is perfect for them to abuse for their own advancement.  They will work within 'the system' to get the best that they can for themselves."); break;
			case "ne": write("Neutral Evil\<\/b> characters believe in Number One.  Their personal gain takes precedance over all else, and they will work with whomever necessary and whatever institutions necessary to further their own goals."); break;
			case "ce": write("Chaotic Evil\<\/b> characters are the most 'evil' people out there.  They are willing to do <i>anything\<\/i> to get ahead, and will kill anyone who stands in their way.  A chaotic evil person sees no value in order and governments, and believes to the utmost in the tenant that 'Might Makes Right'."); }

		write("<br><br><u>Race:\<\/u><br><b>");

		switch (race) {
			case "human": write("Humans\<\/b> are the 'average' race.  They have the shortest life spans, and because of this, they tend to avoid the racial prejudices that other races are known for.  They are also very curious and tend to live 'for the moment'."); break;
			case "halfling": write("Halflings\<\/b> are short and fat, like minuature people.  (Think 'Hobbits')  They enjoy the easy life, but aren't averse to the idea of an adventure from time to time.  They get along with all races, and are known for their senses of humor.  Halflings also tend to be light of foot, and can move quietly when necessary."); break;
			case "elf": write("Elves\<\/b> are the eldest of all races, although they are generally a bit smaller than humans.  They are generally well-cultured, artistic, easy-going, and because of their long lives, unconcerned with day-to-day activities that other races frequently concern themselves with.  Elves are, effectively, immortal, although they can be killed.  After a thousand years or so, they simply pass on to the next plane of existance."); break;
			case "halfelf": write("Half-Elves\<\/b> are a cross between a human and an elf.  They are smaller, like their elven ancestors, but have a much shorter lifespan.  They are sometimes looked down upon as half-breeds, but this is rare.  They have both the curious drive of humans and the patience of elves."); break;
			case "gnome": write("Gnomes\<\/b> are also short, like dwarves, but much skinnier.  They have no beards, and are very inclined towards technology, although they have been known to dabble in magic, too.  They tend to be fun-loving and fond of jokes and humor.  Some gnomes live underground, and some live in cities and villages.  They are very tolerant of other races, and are generally well-liked, though occasionally considered frivolous."); break;
			case "halforc": write("Half-Orcs\<\/b> are a cross between a human and an orc.  Generally, this kind of mating does not occur willingly, so half-orcs are almost never raised by a full set of parents.  They tend to be less intelligent and attractive than humans, but are generally stronger and hardier.  Violence is a part of their nature, and few half-orcs manage to overcome this to follow other professions.  They are generally treated with disdain by other races, if not outright hostility."); break;
			case "dwarf": write("Dwarves\<\/b> are short and stout, and easily recognizable by their well-cared-for beards.  They are hard workers, and adept at stonework and engineering.  They tend to live apart from other races; generally in deep, underground excavated systems, and as such tend to be distant from other races."); }

		write("<br><br><u>");

		if (secclass != "none") { write("Primary "); }

		write("Class:\<\/u><br><b>");

		switch (primclass) {
			case "fighter": write("Fighters\<\/b> are the warriors.  They use weapons to accomplish their goals.  This isn't to say that they aren't intelligent, but that they <i>do\<\/i>, in fact, believe that violence is frequently the answer."); break;
			case "ranger": write("Rangers\<\/b> are the defenders of nature and the elements.  They are in tune with the Earth, and work to keep it safe and healthy."); break;
			case "paladin": write("Paladins\<\/b> are the Holy Warriors.  They have been chosen by a God/dess to be their representative on Earth, and must follow the code of that deity, or risk severe penalties. They tend towards being righteous, but not generally to excess."); break;
			case "mage": write("Mages\<\/b> harness the magical energies for their own use.  Spells, spell books, and long hours in the library are their loves.  While often not physically strong, their mental talents can make up for this."); break;
			case "cleric": write("Clerics\<\/b> are the voices of their God/desses on Earth.  They perform the work of their deity, but this doesn't mean that they preach to a congregation all their lives.  If their deity needs something done, they will do it, and can call upon that deity's power to accomplish their goals."); break;
			case "druid": write("Druids\<\/b> are a special variety of Cleric who serves the Earth, and can call upon the power in the earth to accomplish their goals.  They tend to be somewhat fanatical about defending natural settings."); break;
			case "thief": write("Thieves\<\/b> are the most roguish of the classes.  They are sneaky and nimble-fingered, and have skills with traps and locks.  While not all use these skills for burglary, that is a common occupation of this class."); break;
			case "monk": write("Monks\<\/b> are strange and generally not understood by the world at large.  They live apart from people, and follow strict codes that restrain their behavior and lifestyle.  They have an exceptionally calm outlook on life, and generally do not resort to violence unless absolutely necessary.  Even when they do, their code of conduct forbids the use of all weapons - except their hands.  As such, monks are extremely skilled at hand-to-hand combat, and no other style."); break;
			case "bard": write("Bards\<\/b> are the entertainers. They sing, dance, and play instruments to make other people happy, and, frequently, make money.  They also tend to dabble in magic a bit."); }

		if (secclass != "none") { write("<br><br><u>Secondary Class:\<\/u><br><b>"); }

		switch (secclass) {
			case "fighter": write("Fighters\<\/b> are the warriors.  They use weapons to accomplish their goals.  This isn't to say that they aren't intelligent, but that they <i>do\<\/i>, in fact, believe that violence is frequently the answer."); break;
			case "ranger": write("Rangers\<\/b> are the defenders of nature and the elements.  They are in tune with the Earth, and work to keep it safe and healthy."); break;
			case "paladin": write("Paladins\<\/b> are the Holy Warriors.  They have been chosen by a God/dess to be their representative on Earth, and must follow the code of that deity, or risk severe penalties. They tend towards being righteous, but not generally to excess."); break;
			case "mage": write("Mages\<\/b> harness the magical energies for their own use.  Spells, spell books, and long hours in the library are their loves.  While often not physically strong, their mental talents can make up for this."); break;
			case "cleric": write("Clerics\<\/b> are the voices of their God/desses on Earth.  They perform the work of their deity, but this doesn't mean that they preach to a congregation all their lives.  If their deity needs something done, they will do it, and can call upon that deity's power to accomplish their goals."); break;
			case "druid": write("Druids\<\/b> are a special variety of Cleric who serves the Earth, and can call upon the power in the earth to accomplish their goals.  They tend to be somewhat fanatical about defending natural settings."); break;
			case "thief": write("Thieves\<\/b> are the most roguish of the classes.  They are sneaky and nimble-fingered, and have skills with traps and locks.  While not all use these skills for burglary, that is a common occupation of this class."); break;
			case "monk": write("Monks\<\/b> are strange and generally not understood by the world at large.  They live apart from people, and follow strict codes that restrain their behavior and lifestyle.  They have an exceptionally calm outlook on life, and generally do not resort to violence unless absolutely necessary.  Even when they do, their code of conduct forbids the use of all weapons - except their hands.  As such, monks are extremely skilled at hand-to-hand combat, and no other style."); break;
			case "bard": write("Bards\<\/b> are the entertainers. They sing, dance, and play instruments to make other people happy, and, frequently, make money.  They also tend to dabble in magic a bit."); }

		if (deitychk==1) {

		write("<br><br><u>Deity:\<\/u><br><b>");

		switch (deity) {
			case "tyr": write("Tyr\<\/b> is the Lawful Good god of justice.  He is also known as Tyr Grimjaws, Wounded Tyr, the Maimed God, and Blind Tyr.  He appears as a warrior, missing his hand.  Followers of Tyr are concerned first and foremost with justice - discovering the truth and punishing the guilty for their crimes.  They wear blue and purple robes with a white sash, a white gauntlet on the left hand, and a black gauntlet on the right, to symbolize Tyr's lost hand.  Their preferred weapon is the warhammer.  Tyr's symbol is a set of scales resting on a warhammer."); break;
			case "avoreen": write("Avoreen\<\/b> is the Lawful Good halfling god of war, defense, and vigilance.  He is also known as the Defender and the Vigilant Guardian.  Followers of Avoreen are devoted to the defense of the halfling race, and spend their days drilling and preparing other halflings for the defense of their homes, if necessary.  Their preferred weapon is the short sword.  Avoreen's symbol is a pair of crossed short swords."); break;
			case "moradin": write("Moradin\<\/b> is the Lawful Good dwarven god of stone, rock, fire, and metal.  He is also known as the Creator God, because he is the creator of the dwarven race.  Followers of Moradin believe that a person's worth is determined by the things they do.  They also are trained to work in the forge, creating weapons in the name and spirit of Moradin.  They can use any weapon, but it must be one that they have created themselves.  Moradin's symbol is a hammer and an anvil."); break;
			case "lathander": write("Lathander\<\/b> is the Neutral Good god of spring, dawn, birth, and renewal.  His followers believe in new beginnings, and work for the betterment of all.  They have no preferred weapon, but they typically wear plate mail and a shield, with red and yellow tinting.  Lathander's symbol is rosy pink disk, typically cut from rose quartz."); break;
			case "mystra": write("Mystra\<\/b> is the Neutral Good goddess of magic.  She is also known as the Lady of Mysteries.  Followers of Mystra wear armor and carry shields with her symbol on them.  Mystra's symbol is a ring of stars."); break;
			case "oghma": write("Oghma\<\/b> is the Neutral Good god of knowledge and invention.  He is also known as the Binder of What is Known, and is the Patron of Bards.  His followers believe that knowledge reigns supreme, and is the basis for everything else that is done.  They wear white shirts and pants, with a black and gold braided vest, and a small, box-like hat.  All priests of Oghma are known as Loremasters.  Oghma's symbol is a scroll."); break;
			case "mielikki": write("Mielikki\<\/b> is the Neutral Good goddess of the forest and autumn.  She is also known as the Lady of the Forest, and is the Patron of Rangers.  Her followers are devoted to nature, and believe in the positive and outreaching elements of it.  They use light armor, and a variety of weapons suitable for hunting, which they are quite skilled at.  Mielikki's symbol is a unicorn head."); break;
			case "marthammor_duin": write("Marthammor Duin\<\/b> is the Neutral Good dwarven god of protection and travel.  He is also known as the Finder of Trails, the Watcher over Wanderers, the Watchful Eye, and the Wanderer.  His followers are also wanderers, and are open to new ideas far more than most dwarves.  They are typically guides or scouts.  Their preferred weapon is the heavy mace.  Marthammor Duin's symbol is an upright mace in front of a fur-trimmed leather boot."); break;
			case "tymora": write("Tymora\<\/b> is the Chaotic Good goddess of luck and good fortune.  She is also known as Lady Luck, and also Tyche's fair-tressed daughter.  Followers of Tymora believe in the tenent that, 'Fortune Favors the Bold,' and will throw caution to the wind and trust to luck to work things out for the best.  Tymora's symbol is an unmarked silver disk."); break;
			case "finder_wyvernspur": write("Finder Wyvernspur\<\/b> is the Chaotic Neutral god of the cycle of life and the transformation of art, although he leans heavily towards Good.  He is also known as the Nameless Bard.  Followers of Finder believe that everything must change in order to grow and thrive.  Their preferred weapon is the bastard sword."); break;
			case "shaundakul": write("Shaundakul\<\/b> is the Chaotic Good god of travel and exploration.  He is also known as the Rider of the Winds.  His followers are typically rangers, and work to protect the land.  They typically wear leather armor, and carry long swords and short bows.  Shaundakul's symbol is a white hand with the index finger raised."); break;
			case "hanali_cenanil": write("Hanali Cenanil\<\/b> is the Chaotic Good elven goddess of love, beauty, and art.  She is also known as the Heart of Gold and Lady Goldheart.  Her followers delight in creation and youth, and work to spread happiness, love, and beauty.  Their preferred weapon is the dagger."); break;
			case "solonor_thelandria": write("Solonor Thelandria\<\/b> is the Chaotic Good elven god of archery and the hunt.  He is also known as the Keen Eye, the Great Archer, and the Forest Hunter.  His followers respect nature, and only hunt when needed, but are quick to defend the forest from intruders.  Their favorite weapon is the bow, and they tend to be extremely talented with it.  Solonor Thelandria's symbol is an arrow with green fletchings."); break;
			case "rillifane_rallathil": write("Rillifane Rallathil\<\/b> is the Chaotic Good elven god of woodlands and nature.  He is also known as the Leaflord, the Wild One, and the Great Oak.  He is appears as a huge oak tree.  His followers believe that everyone should be free to spend their lives doing what nature has meant them to, and they protect the forests from those who would abuse them.  Their preferred weapon is the quarterstaff.  Rillifane Rallathil's symbol is an oak tree."); break;
			case "helm": write("Helm\<\/b> is the Lawful Neutral god of guardians and protectors.  His followers believe in vigilance and preparedness, and are always ready for whatever confronts them.  They wear plate mail, sometimes with gold embossing, with an open eye set into the breastplate, and an open-faced helmet.  Helm's symbol is an open eye in a gauntlet."); break;
			case "azuth": write("Azuth\<\/b> is the Lawful Neutral god of wizards and mages.  He is also known as the High One, and is the Patron of Wizards.  His followers believe that a systematic approach to magic is the best, and they strive for calm and caution in order to avoid accidents.  They wear shimmering robes, and are well-versed in magic, as well as typical priest spells.  Azuth's symbol is a hand with a raised, glowing index finger."); break;
			case "urogalan": write("Urogalan\<\/b> is the Lawful Neutral halfling god of death and earth.  He is also known as He Who Must Be and the Lord in the Earth.  His followers guard the dead and protect halflings from those that don't stay buried.  Their preferred weapon is the flail.  Urogalan's symbol is a silhouette of a dog's head."); break;
			case "gond": write("Gond\<\/b> is the True Neutral god of artifice, craft, and construction.  He is also known as Gond Wonderbringer.  His followers believe that 'actions count' - that is, that what is accomplished in the end is what is truly important.  They wear saffron clothing, with red sashes containing all manner of mechanical devices.  Their preferred weapons are firearms, since the followers of Gond had a large hand in their making and invention.  They also wear plate mail (no shield), but generally prefer to have bodyguards, instead.  Gond's symbol is a toothed wheel, made of ivory, bone, or metal."); break;
			case "silvanus": write("Silvanus\<\/b> is the True Neutral god of nature.  He is also known as the Patron of Druids.  His followers believe in the perfect balance of nature, and believe that nature's bounty is preferable to any other 'civilizing' method.  They wear leather or metallic scale mail, constructed of leaf-shaped scales.  Silvanus's symbol is an oak leaf."); break;
			case "sheela_peryroyl": write("Sheela Peryroyl\<\/b> is the True Neutral halfling goddess of nature, agriculture, beauty, and romantic love.  She is also known as the Green Sister and the Watchful Mother.  She appears as a halfling dressed in wildflowers.  Her followers work to preserve nature's beauty and also cultivate wilderness areas for halflings to settle.  They also have feasts and parties, where romance and revelry are encouraged.  Their preferred weapon is the sickle.  They typically wear a small flower in their hair.  Sleeha Peryroyl's symbol is the daisy."); break;
			case "brandobaris": write("Brandobaris\<\/b> is the True Neutral halfling god of stealth, adventuring, and thievery.  He is also known as the Master of Stealth, the Trickster, and the Irrepressible Scamp.  His followers are always on the lookout for an adventure, and try to make a profit, but avoid greed.  Their preferred weapon is the dagger.  Brandobaris's symbol is an open, round door."); break;
			case "dumathoin": write("Dumathoin\<\/b> is the True Neutral dwarven god of buried wealth, ores, gems, and mining.  He is also known as the Keeper of Secrets under the Mountain.  His followers are typically miners and explorers, but also respect the beauty of the earth.  They also stand guard over the dwarven dead.  Their preferred weapon is the maul.  Dumathoin's symbol is a faceted gem set inside a mountain peak."); break;
			case "beshaba": write("Beshaba\<\/b> is the Chaotic Evil goddess of bad luck, accidents, and mischief.  She is also known as the Maid of Misfortune, and also Tyche's unpleasant daughter.  Followers of Beshaba believe that bad things happen to everyone, and only by praying to Beshaba will you have a chance of being spared.  Her symbol is a set of black deer's antlers inset on a red triangle."); break;
			case "tempus": write("Tempus\<\/b> is the Chaotic Neutral god of war.  He is also known as the Lord of Battle and the Foehammer.  His followers believe in the glory and joy of battle, and are never far from it.  They typically wear battered armor, and carry a variety of weapons, but do not use missile weapons.  Tempus's symbol is a flaming sword."); break;
			case "fenmarel_mestarine": write("Fenmarel Mestarine\<\/b> is the Chaotic Neutral elven god of outcasts and isolation.  He is also known as the Lone Wolf.  His followers are outcasts (either by force or by choice) from elven society, and believe in being self-sufficient.  Their preferred weapon is the dagger.  Fenmarel Mestarine's symbol is a pair of elven eyes in the darkness."); break;
			case "erevan_ilesere": write("Erevan Ilesere\<\/b> is the Chaotic Neutral elven god of mischief and rogues.  He is also known as the Trickster and the Chameleon.  His followers are always looking for fun and adventure, and are notorious pranksters.  Their favorite weapon is the short sword.  Erevan Ilesere's symbol is a nova star with asymmetric rays."); break;
			case "iyachtu_xvim": write("Iyachtu Xvim\<\/b> is the Lawful Evil god of fear, hatred, malice, and tyranny.  He is also known as the Godson and the Son of Bane.  He appears as a gaunt, naked, scimitar-wielding man, or as a black cloud with glowing green eyes.  His followers are working to strengthen his position in the world by converting (often by force) other deities' worshippers.  They wear black robes with dark green trim, and wear black iron gauntlets with green eyes on the backs.  Iyachtu Xvim's symbol is a black hand, inset with green eyes."); break;
			case "cyric": write("Cyric\<\/b> is the Neutral Evil god of death, murder, the dead, strife, tyranny, deception, and illusion.  His followers are working to secure his position as a new god, and are in conflict with many worshippers of other deities.  They wear black or dark purple robes, with silver trimming, and wear silver bracelets.  Cyric's symbol is a skull set in a purple starburst."); break;
			case "mask": write("Mask\<\/b> is the Neutral Evil god of rogues, thieves.  He is also known as the Lord of Shadows.  He appears as a lithe man, shadowed, wearing dark clothing.  His followers believe in stealth and wariness.  They wear black and gray clothing, and carry weapons and armor similar to that of a thief.  They frequently wear masks to conceal their identity.  Mask's symbol is a dark, checkered mask."); break;
			case "abbathor": write("Abbathor\<\/b> is the Neutral Evil dwarven god of greed.  He is also known as the Great Master of Greed, the Trove Lord, and the Avaricious.  His followers believe in the gaining of riches and wealth by any means necessary.  Their preferred weapon is the dagger.  Abbathor's symbol is a jeweled dagger."); break;
			case "velsharoon": write("Velsharoon\<\/b> is the Neutral Evil god of necromancy, liches, and undeath.  He is also known as the Vaunted, the Archmage of Necromancy, and the Lord of the Forgotten Crypt.  His followers practice the necromantic arts, and raise the dead to do their bidding.  His symbol is a crowned skull."); break;
			case "talos": write("Talos\<\/b> is the Chaotic Evil god of storms, forest fires, earthquakes, tornadoes, and destruction in general.  He is also known as the Destroyer.  His followers fear him more than worship him, and they revel in the destructive fury of nature - while praying to be spared from its wrath.  Talos's symbol is three lightning bolts, of different colors, coming from a central point."); break;
			case "garl_glittergold": write("Garl Glittergold\<\/b> is the Lawful Good gnomish god of mischief, cleverness, battle, and gemstones.  He is also known as the Joker, the Watchful Protector, the Priceless Gem, the Sparkling Wit, and the God of Gnomes, as he is the head of their pantheon.  His followers enjoy a good laugh and a good prank, perhaps even more so than a normal gnome, but also work to make the world a better place.  They are extremely fond of gems.  Their preferreed weapon is the battleaxe."); break;
			case "gaerdal_ironhand": write("Gaerdal Ironhand\<\/b> is the Lawful Good gnomish god of vigilance and combat.  He is also known as the Stern and the Shield of the Golden Hills.  His followers work to defend the homes of the gnomish race, and practice the arts of war and train others to do the same.  They are somewhat isolated from the generally fun-loving gnomes, because they take their duties very seriously.  Their preferred weapon is the warhammer."); break;
			case "baervan_wildwanderer": write("Baervan Wildwanderer\<\/b> is the Neutral Good gnomish god of forests, travel, and nature.  He is also known as the Masked Leaf.  His avatar is always accompanied by an intelligent, giant raccoon, named Chiktikka Fastpaws.  His followers, like him, enjoy the outdoors and work to protect it and guard those who also enjoy it.  Their preferred weapon is the halfspear."); break;
			case "flandal_steelskin": write("Flandal Steelskin\<\/b> is the Neutral Good gnomish god of mining, physical fitness, metalworking, and smithing.  He is also known as the Master of Metal, the Lord of Smiths,  and the Great Steelsmith.  His worshippers are frequently miners or smiths, and believe in the value of metalworking, and also in the value of physical strength.  Their preferred weapon is the warhammer."); break;
			case "callarduran_smoothhands": write("Callarduran Smoothhands\<\/b> is the True Neutral gnomish god of stone, the underground, and mining.  He is also known as the Deep Brother and the Master of Stone.  His followers enjoy mining - especially for rubies.  Their favorite weapon is the battleaxe."); break;
			case "urdlen": write("Urdlen\<\/b> is the Chaotic Evil gnomish god of greed, bloodlust, and hatred.  It is also known as the Crawler Below.  Urdlen is generally represented as a huge, furless mole with sharp claws.  His followers have changed their love of pranks and jokes to a love of malicious schemes and general evildoing.  Their favored weapon is the claw bracer."); }
		}

		if (survey.html.checked) {

		write("<br><br><hr><br><u>Web page and journal code\<\/u>:  Copy and paste the following:<br><br>");

		write("<center><table border=0 cellspacing=0 cellpadding=3 width=700><tr><td><samp>");

		write("&lt;b>I Am A:&lt;/b> ");

		switch (align) {
			case "lg": write("Lawful Good "); break;
			case "ng": write("Neutral Good "); break;
			case "cg": write("Chaotic Good "); break;
			case "ln": write("Lawful Neutral "); break;
			case "nn": write("True Neutral "); break;
			case "cn": write("Chaotic Neutral "); break;
			case "le": write("Lawful Evil "); break;
			case "ne": write("Neutral Evil "); break;
			case "ce": write("Chaotic Evil "); }

		switch (race) {
			case "human": write("Human "); break;
			case "halfling": write("Halfling "); break;
			case "elf": write("Elf "); break;
			case "halfelf": write("Half-Elf "); break;
			case "gnome": write("Gnome"); break;
			case "halforc": write("Half-Orc"); break;
			case "dwarf": write("Dwarf "); }

		switch (primclass) {
			case "fighter": write("Fighter "); break;
			case "ranger": write("Ranger "); break;
			case "paladin": write("Paladin "); break;
			case "mage": write("Mage "); break;
			case "cleric": write("Cleric "); break;
			case "druid": write("Druid "); break;
			case "thief": write("Thief "); break;
			case "bard": write("Bard "); }

		switch (secclass) {
			case "fighter": write("Fighter"); break;
			case "ranger": write("Ranger"); break;
			case "paladin": write("Paladin"); break;
			case "mage": write("Mage"); break;
			case "cleric": write("Cleric"); break;
			case "druid": write("Druid"); break;
			case "thief": write("Thief"); break;
			case "bard": write("Bard"); }

		write("<br>&lt;br>&lt;br>&lt;u>Alignment:&lt;/u>&lt;br>&lt;b>");

		switch (align) {
			case "lg": write("Lawful Good&lt;/b> characters are the epitome of all that is just and good.  They believe in order and governments that work for the benefit of all, and generally do not mind doing direct work to further their beliefs."); break;
			case "ng": write("Neutral Good&lt;/b> characters believe in the power of good above all else.  They will work to make the world a better place, and will do whatever is necessary to bring that about, whether it goes for or against whatever is considered 'normal'."); break;
			case "cg": write("Chaotic Good&lt;/b> characters are independent types with a strong belief in the value of goodness.  They have little use for governments and other forces of order, and will generally do their own things, without heed to such groups."); break;
 			case "ln": write("Lawful Neutral&lt;/b> characters believe in the triumph of law and order above all else.  It does not matter whether the leader is for good or evil; the leader will be followed, because the order they provide is the most important thing."); break;
 			case "nn": write("True Neutral&lt;/b> characters are very rare.  They believe that balance is the most important thing, and will not side with any other force.  They will do whatever is necessary to preserve that balance, even if it means switching allegiances suddenly."); break;
			case "cn": write("Chaotic Neutral&lt;/b> characters are unstable, and frequently insane.  They believe in disorder first and foremost, and will thus strive for that disorder in everything they do. This means that they will do whatever seems 'fun' or 'novel' at any given time."); break;
			case "le": write("Lawful Evil&lt;/b> characters believe that a nice, orderly system of life is perfect for them to abuse for their own advancement.  They will work within 'the system' to get the best that they can for themselves."); break;
			case "ne": write("Neutral Evil&lt;/b> characters believe in Number One.  Their personal gain takes precedance over all else, and they will work with whomever necessary and whatever institutions necessary to further their own goals."); break;
			case "ce": write("Chaotic Evil&lt;/b> characters are the most 'evil' people out there.  They are willing to do <i>anything\<\/i> to get ahead, and will kill anyone who stands in their way. A chaotic evil person sees no value in order and governments, and believes to the utmost in the tenant that 'Might Makes Right'."); }

		write("<br>&lt;br>&lt;br>&lt;u>Race:&lt;/u>&lt;br>&lt;b>");

		switch (race) {
			case "human": write("Humans&lt;/b> are the 'average' race.  They have the shortest life spans, and because of this, they tend to avoid the racial prejudices that other races are known for. They are also very curious and tend to live 'for the moment'."); break;
			case "halfling": write("Halflings&lt;/b> are short and fat, like minuature people.  (Think 'Hobbits')  They enjoy the easy life, but aren't averse to the idea of an adventure from time to time. They get along with all races, and are known for their senses of humor. Halflings also tend to be light of foot, and can move quietly when necessary."); break;
			case "elf": write("Elves&lt;/b> are the eldest of all races, although they are generally a bit smaller than humans.  They are generally well-cultured, artistic, easy-going, and because of their long lives, unconcerned with day-to-day activities that other races frequently concern themselves with.  Elves are, effectively, immortal, although they can be killed.  After a thousand years or so, they simply pass on to the next plane of existance."); break;
			case "halfelf": write("Half-Elves&lt;/b> are a cross between a human and an elf.  They are smaller, like their elven ancestors, but have a much shorter lifespan.  They are sometimes looked down upon as half-breeds, but this is rare.  They have both the curious drive of humans and the patience of elves."); break;
			case "gnome": write("Gnomes&lt;/b> are also short, like dwarves, but much skinnier.  They have no beards, and are very inclined towards technology, although they have been known to dabble in magic, too.  They tend to be fun-loving and fond of jokes and humor.  Some gnomes live underground, and some live in cities and villages.  They are very tolerant of other races, and are generally well-liked, though occasionally considered frivolous."); break;
			case "halforc": write("Half-Orcs&lt;/b> are a cross between a human and an orc.  Generally, this kind of mating does not occur willingly, so half-orcs are almost never raised by a full set of parents.  They tend to be less intelligent and attractive than humans, but are generally stronger and hardier.  Violence is a part of their nature, and few half-orcs manage to overcome this to follow other professions.  They are generally treated with disdain by other races, if not outright hostility."); break;
			case "dwarf": write("Dwarves&lt;/b> are short and stout, and easily recognizable by their well-cared-for beards.  They are hard workers, and adept at stonework and engineering.  They tend to live apart from other races; generally in deep, underground excavated systems, and as such tend to be distant from other races."); }

		write("<br>&lt;br>&lt;br>&lt;u>");

		if (secclass !="none") { write("Primary "); }
		write("Class:&lt;/u>&lt;br>&lt;b>");

		switch (primclass) {
			case "fighter": write("Fighters&lt;/b> are the warriors.  They use weapons to accomplish their goals.  This isn't to say that they aren't intelligent, but that they <i>do\<\/i>, in fact, believe that violence is frequently the answer."); break;
			case "ranger": write("Rangers&lt;/b> are the defenders of nature and the elements.  They are in tune with the Earth, and work to keep it safe and healthy."); break;
			case "paladin": write("Paladins&lt;/b> are the Holy Warriors.  They have been chosen by a God/dess to be their representative on Earth, and must follow the code of that deity, or risk severe penalties.  They tend towards being righteous, but not generally to excess."); break;
			case "mage": write("Mages&lt;/b> harness the magical energies for their own use.  Spells, spell books, and long hours in the library are their loves.  While often not physically strong, their mental talents can make up for this."); break;
			case "cleric": write("Clerics&lt;/b> are the voices of their God/desses on Earth.  They perform the work of their deity, but this doesn't mean that they preach to a congregation all their lives.  If their deity needs something done, they will do it, and can call upon that deity's power to accomplish their goals."); break;
			case "druid": write("Druids&lt;/b> are a special variety of Cleric who serves the Earth, and can call upon the power in the earth to accomplish their goals.  They tend to be somewhat fanatical about defending natural settings."); break;
			case "thief": write("Thieves&lt;/b> are the most roguish of the classes.  They are sneaky and nimble-fingered, and have skills with traps and locks.  While not all use these skills for burglary, that is a common occupation of this class."); break;
			case "monk": write("Monks&lt;/b> are strange and generally not understood by the world at large.  They live apart from people, and follow strict codes that restrain their behavior and lifestyle.  They have an exceptionally calm outlook on life, and generally do not resort to violence unless absolutely necessary.  Even when they do, their code of conduct forbids the use of all weapons - except their hands.  As such, monks are extremely skilled at hand-to-hand combat, and no other style."); break;
			case "bard": write("Bards&lt;/b> are the entertainers.  They sing, dance, and play instruments to make other people happy, and, frequently, make money.  They also tend to dabble in magic a bit."); }

		if (secclass !="none") { write("<br>&lt;br>&lt;br>&lt;u>Secondary Class:&lt;/u>&lt;br>&lt;b>"); }

		switch (secclass) {
			case "fighter": write("Fighters&lt;/b> are the warriors.  They use weapons to accomplish their goals.  This isn't to say that they aren't intelligent, but that they <i>do\<\/i>, in fact, believe that violence is frequently the answer."); break;
			case "ranger": write("Rangers&lt;/b> are the defenders of nature and the elements.  They are in tune with the Earth, and work to keep it safe and healthy."); break;
			case "paladin": write("Paladins&lt;/b> are the Holy Warriors.  They have been chosen by a God/dess to be their representative on Earth, and must follow the code of that deity, or risk severe penalties. They tend towards being righteous, but not generally to excess."); break;
			case "mage": write("Mages&lt;/b> harness the magical energies for their own use.  Spells, spell books, and long hours in the library are their loves.  While often not physically strong, their mental talents can make up for this."); break;
			case "cleric": write("Clerics&lt;/b> are the voices of their God/desses on Earth.  They perform the work of their deity, but this doesn't mean that they preach to a congregation all their lives.  If their deity needs something done, they will do it, and can call upon that deity's power to accomplish their goals."); break;
			case "druid": write("Druids&lt;/b> are a special variety of Cleric who serves the Earth, and can call upon the power in the earth to accomplish their goals.  They tend to be somewhat fanatical about defending natural settings."); break;
			case "thief": write("Thieves&lt;/b> are the most roguish of the classes.  They are sneaky and nimble-fingered, and have skills with traps and locks.  While not all use these skills for burglary, that is a common occupation of this class."); break;
			case "monk": write("Monks&lt;/b> are strange and generally not understood by the world at large.  They live apart from people, and follow strict codes that restrain their behavior and lifestyle.  They have an exceptionally calm outlook on life, and generally do not resort to violence unless absolutely necessary.  Even when they do, their code of conduct forbids the use of all weapons - except their hands.  As such, monks are extremely skilled at hand-to-hand combat, and no other style."); break;
			case "bard": write("Bards&lt;/b> are the entertainers.  They sing, dance, and play instruments to make other people happy, and, frequently, make money.  They also tend to dabble in magic a bit."); }

		if (deitychk==1) {

		write("<br>&lt;br>&lt;br>&lt;u>Deity:&lt;/u>&lt;br>&lt;b>");

		switch (deity) {
			case "tyr": write("Tyr&lt;/b> is the Lawful Good god of justice.  He is also known as Tyr Grimjaws, Wounded Tyr, the Maimed God, and Blind Tyr.  He appears as a warrior, missing his hand.  Followers of Tyr are concerned first and foremost with justice - discovering the truth and punishing the guilty for their crimes.  They wear blue and purple robes with a white sash, a white gauntlet on the left hand, and a black gauntlet on the right, to symbolize Tyr's lost hand.  Their preferred weapon is the warhammer.  Tyr's symbol is a set of scales resting on a warhammer."); break;
			case "avoreen": write("Avoreen&lt;/b> is the Lawful Good halfling god of war, defense, and vigilance.  He is also known as the Defender and the Vigilant Guardian.  Followers of Avoreen are devoted to the defense of the halfling race, and spend their days drilling and preparing other halflings for the defense of their homes, if necessary.  Their preferred weapon is the short sword.  Avoreen's symbol is a pair of crossed short swords."); break;
			case "moradin": write("Moradin&lt;\/b> is the Lawful Good dwarven god of stone, rock, fire, and metal.  He is also known as the Creator God, because he is the creator of the dwarven race.  Followers of Moradin believe that a person's worth is determined by the things they do.  They also are trained to work in the forge, creating weapons in the name and spirit of Moradin.  They can use any weapon, but it must be one that they have created themselves.  Moradin's symbol is a hammer and an anvil."); break;
			case "lathander": write("Lathander&lt;/b> is the Neutral Good god of spring, dawn, birth, and renewal.  His followers believe in new beginnings, and work for the betterment of all.  They have no preferred weapon, but they typically wear plate mail and a shield, with red and yellow tinting.  Lathander's symbol is rosy pink disk, typically cut from rose quartz."); break;
			case "mystra": write("Mystra&lt;/b> is the Neutral Good goddess of magic.  She is also known as the Lady of Mysteries.  Followers of Mystra wear armor and carry shields with her symbol on them.  Mystra's symbol is a ring of stars."); break;
			case "oghma": write("Oghma&lt;/b> is the Neutral Good god of knowledge and invention.  He is also known as the Binder of What is Known, and is the Patron of Bards.  His followers believe that knowledge reigns supreme, and is the basis for everything else that is done.  They wear white shirts and pants, with a black and gold braided vest, and a small, box-like hat.  All priests of Oghma are known as Loremasters.  Oghma's symbol is a scroll."); break;
			case "mielikki": write("Mielikki&lt;/b> is the Neutral Good goddess of the forest and autumn.  She is also known as the Lady of the Forest, and is the Patron of Rangers.  Her followers are devoted to nature, and believe in the positive and outreaching elements of it.  They use light armor, and a variety of weapons suitable for hunting, which they are quite skilled at.  Mielikki's symbol is a unicorn head."); break;
			case "marthammor_duin": write("Marthammor Duin&lt;/b> is the Neutral Good dwarven god of protection and travel.  He is also known as the Finder of Trails, the Watcher over Wanderers, the Watchful Eye, and the Wanderer.  His followers are also wanderers, and are open to new ideas far more than most dwarves.  They are typically guides or scouts.  Their preferred weapon is the heavy mace.  Marthammor Duin's symbol is an upright mace in front of a fur-trimmed leather boot."); break;
			case "tymora": write("Tymora&lt;/b> is the Chaotic Good goddess of luck and good fortune.  She is also known as Lady Luck, and also Tyche's fair-tressed daughter.  Followers of Tymora believe in the tenent that, 'Fortune Favors the Bold,' and will throw caution to the wind and trust to luck to work things out for the best.  Tymora's symbol is an unmarked silver disk."); break;
			case "finder_wyvernspur": write("Finder Wyvernspur&lt;/b> is the Chaotic Neutral god of the cycle of life and the transformation of art, although he leans heavily towards Good.  He is also known as the Nameless Bard.  Followers of Finder believe that everything must change in order to grow and thrive.  Their preferred weapon is the bastard sword."); break;
			case "shaundakul": write("Shaundakul&lt;/b> is the Chaotic Good god of travel and exploration.  He is also known as the Rider of the Winds.  His followers are typically rangers, and work to protect the land.  They typically wear leather armor, and carry long swords and short bows.  Shaundakul's symbol is a white hand with the index finger raised."); break;
			case "hanali_cenanil": write("Hanali Cenanil&lt;/b> is the Chaotic Good elven goddess of love, beauty, and art.  She is also known as the Heart of Gold and Lady Goldheart.  Her followers delight in creation and youth, and work to spread happiness, love, and beauty.  Their preferred weapon is the dagger."); break;
			case "solonor_thelandria": write("Solonor Thelandria&lt;/b> is the Chaotic Good elven god of archery and the hunt.  He is also known as the Keen Eye, the Great Archer, and the Forest Hunter.  His followers respect nature, and only hunt when needed, but are quick to defend the forest from intruders.  Their favorite weapon is the bow, and they tend to be extremely talented with it.  Solonor Thelandria's symbol is an arrow with green fletchings."); break;
			case "rillifane_rallathil": write("Rillifane Rallathil&lt;/b> is the Chaotic Good elven god of woodlands and nature.  He is also known as the Leaflord, the Wild One, and the Great Oak.  He is appears as a huge oak tree.  His followers believe that everyone should be free to spend their lives doing what nature has meant them to, and they protect the forests from those who would abuse them.  Their preferred weapon is the quarterstaff.  Rillifane Rallathil's symbol is an oak tree."); break;
			case "helm": write("Helm&lt;/b> is the Lawful Neutral god of guardians and protectors.  His followers believe in vigilance and preparedness, and are always ready for whatever confronts them.  They wear plate mail, sometimes with gold embossing, with an open eye set into the breastplate, and an open-faced helmet.  Helm's symbol is an open eye in a gauntlet."); break;
			case "azuth": write("Azuth&lt;/b> is the Lawful Neutral god of wizards and mages.  He is also known as the High One, and is the Patron of Wizards.  His followers believe that a systematic approach to magic is the best, and they strive for calm and caution in order to avoid accidents.  They wear shimmering robes, and are well-versed in magic, as well as typical priest spells.  Azuth's symbol is a hand with a raised, glowing index finger."); break;
			case "urogalan": write("Urogalan&lt;/b> is the Lawful Neutral halfling god of death and earth.  He is also known as He Who Must Be and the Lord in the Earth.  His followers guard the dead and protect halflings from those that don't stay buried.  Their preferred weapon is the flail.  Urogalan's symbol is a silhouette of a dog's head."); break;
			case "gond": write("Gond&lt;/b> is the True Neutral god of artifice, craft, and construction.  He is also known as Gond Wonderbringer.  His followers believe that 'actions count' - that is, that what is accomplished in the end is what is truly important.  They wear saffron clothing, with red sashes containing all manner of mechanical devices.  Their preferred weapons are firearms, since the followers of Gond had a large hand in their making and invention.  They also wear plate mail (no shield), but generally prefer to have bodyguards, instead.  Gond's symbol is a toothed wheel, made of ivory, bone, or metal."); break;
			case "silvanus": write("Silvanus&lt;/b> is the True Neutral god of nature.  He is also known as the Patron of Druids.  His followers believe in the perfect balance of nature, and believe that nature's bounty is preferable to any other 'civilizing' method.  They wear leather or metallic scale mail, constructed of leaf-shaped scales.  Silvanus's symbol is an oak leaf."); break;
			case "sheela_peryroyl": write("Sheela Peryroyl&lt;/b> is the True Neutral halfling goddess of nature, agriculture, beauty, and romantic love.  She is also known as the Green Sister and the Watchful Mother.  She appears as a halfling dressed in wildflowers.  Her followers work to preserve nature's beauty and also cultivate wilderness areas for halflings to settle.  They also have feasts and parties, where romance and revelry are encouraged.  Their preferred weapon is the sickle.  They typically wear a small flower in their hair.  Sleeha Peryroyl's symbol is the daisy."); break;
			case "brandobaris": write("Brandobaris&lt;/b> is the True Neutral halfling god of stealth, adventuring, and thievery.  He is also known as the Master of Stealth, the Trickster, and the Irrepressible Scamp.  His followers are always on the lookout for an adventure, and try to make a profit, but avoid greed.  Their preferred weapon is the dagger.  Brandobaris's symbol is an open, round door."); break;
			case "dumathoin": write("Dumathoin&lt;/b> is the True Neutral dwarven god of buried wealth, ores, gems, and mining.  He is also known as the Keeper of Secrets under the Mountain.  His followers are typically miners and explorers, but also respect the beauty of the earth.  They also stand guard over the dwarven dead.  Their preferred weapon is the maul.  Dumathoin's symbol is a faceted gem set inside a mountain peak."); break;
			case "beshaba": write("Beshaba&lt;/b> is the Chaotic Evil goddess of bad luck, accidents, and mischief.  She is also known as the Maid of Misfortune, and also Tyche's unpleasant daughter.  Followers of Beshaba believe that bad things happen to everyone, and only by praying to Beshaba will you have a chance of being spared.  Her symbol is a set of black deer's antlers inset on a red triangle."); break;
			case "tempus": write("Tempus&lt;/b> is the Chaotic Neutral god of war.  He is also known as the Lord of Battle and the Foehammer.  His followers believe in the glory and joy of battle, and are never far from it.  They typically wear battered armor, and carry a variety of weapons, but do not use missile weapons.  Tempus's symbol is a flaming sword."); break;
			case "fenmarel_mestarine": write("Fenmarel Mestarine&lt;/b> is the Chaotic Neutral elven god of outcasts and isolation.  He is also known as the Lone Wolf.  His followers are outcasts (either by force or by choice) from elven society, and believe in being self-sufficient.  Their preferred weapon is the dagger.  Fenmarel Mestarine's symbol is a pair of elven eyes in the darkness."); break;
			case "erevan_ilesere": write("Erevan Ilesere&lt;/b> is the Chaotic Neutral elven god of mischief and rogues.  He is also known as the Trickster and the Chameleon.  His followers are always looking for fun and adventure, and are notorious pranksters.  Their favorite weapon is the short sword.  Erevan Ilesere's symbol is a nova star with asymmetric rays."); break;
			case "iyachtu_xvim": write("Iyachtu Xvim&lt;/b> is the Lawful Evil god of fear, hatred, malice, and tyranny.  He is also known as the Godson and the Son of Bane.  He appears as a gaunt, naked, scimitar-wielding man, or as a black cloud with glowing green eyes.  His followers are working to strengthen his position in the world by converting (often by force) other deities' worshippers.  They wear black robes with dark green trim, and wear black iron gauntlets with green eyes on the backs.  Iyachtu Xvim's symbol is a black hand, inset with green eyes."); break;
			case "cyric": write("Cyric&lt;/b> is the Neutral Evil god of death, murder, the dead, strife, tyranny, deception, and illusion.  His followers are working to secure his position as a new god, and are in conflict with many worshippers of other deities.  They wear black or dark purple robes, with silver trimming, and wear silver bracelets.  Cyric's symbol is a skull set in a purple starburst."); break;
			case "mask": write("Mask&lt;/b> is the Neutral Evil god of rogues, thieves.  He is also known as the Lord of Shadows.  He appears as a lithe man, shadowed, wearing dark clothing.  His followers believe in stealth and wariness.  They wear black and gray clothing, and carry weapons and armor similar to that of a thief.  They frequently wear masks to conceal their identity.  Mask's symbol is a dark, checkered mask."); break;
			case "abbathor": write("Abbathor&lt;/b> is the Neutral Evil dwarven god of greed.  He is also known as the Great Master of Greed, the Trove Lord, and the Avaricious.  His followers believe in the gaining of riches and wealth by any means necessary.  Their preferred weapon is the dagger.  Abbathor's symbol is a jeweled dagger."); break;
			case "velsharoon": write("Velsharoon&lt;/b> is the Neutral Evil god of necromancy, liches, and undeath.  He is also known as the Vaunted, the Archmage of Necromancy, and the Lord of the Forgotten Crypt.  His followers practice the necromantic arts, and raise the dead to do their bidding.  His symbol is a crowned skull."); break;
			case "talos": write("Talos&lt;/b> is the Chaotic Evil god of storms, forest fires, earthquakes, tornadoes, and destruction in general.  He is also known as the Destroyer.  His followers fear him more than worship him, and they revel in the destructive fury of nature - while praying to be spared from its wrath.  Talos's symbol is three lightning bolts, of different colors, coming from a central point."); break;
			case "garl_glittergold": write("Garl Glittergold&lt;/b> is the Lawful Good gnomish god of mischief, cleverness, battle, and gemstones.  He is also known as the Joker, the Watchful Protector, the Priceless Gem, the Sparkling Wit, and the God of Gnomes, as he is the head of their pantheon.  His followers enjoy a good laugh and a good prank, perhaps even more so than a normal gnome, but also work to make the world a better place.  They are extremely fond of gems.  Their preferreed weapon is the battleaxe."); break;
			case "gaerdal_ironhand": write("Gaerdal Ironhand&lt;/b> is the Lawful Good gnomish god of vigilance and combat.  He is also known as the Stern and the Shield of the Golden Hills.  His followers work to defend the homes of the gnomish race, and practice the arts of war and train others to do the same.  They are somewhat isolated from the generally fun-loving gnomes, because they take their duties very seriously.  Their preferred weapon is the warhammer."); break;
			case "baervan_wildwanderer": write("Baervan Wildwanderer&lt;/b> is the Neutral Good gnomish god of forests, travel, and nature.  He is also known as the Masked Leaf.  His avatar is always accompanied by an intelligent, giant raccoon, named Chiktikka Fastpaws.  His followers, like him, enjoy the outdoors and work to protect it and guard those who also enjoy it.  Their preferred weapon is the halfspear."); break;
			case "flandal_steelskin": write("Flandal Steelskin&lt;/b> is the Neutral Good gnomish god of mining, physical fitness, metalworking, and smithing.  He is also known as the Master of Metal, the Lord of Smiths,  and the Great Steelsmith.  His worshippers are frequently miners or smiths, and believe in the value of metalworking, and also in the value of physical strength.  Their preferred weapon is the warhammer."); break;
			case "callarduran_smoothhands": write("Callarduran Smoothhands&lt;/b> is the True Neutral gnomish god of stone, the underground, and mining.  He is also known as the Deep Brother and the Master of Stone.  His followers enjoy mining - especially for rubies.  Their favorite weapon is the battleaxe."); break;
			case "urdlen": write("Urdlen&lt;/b> is the Chaotic Evil gnomish god of greed, bloodlust, and hatred.  It is also known as the Crawler Below.  Urdlen is generally represented as a huge, furless mole with sharp claws.  His followers have changed their love of pranks and jokes to a love of malicious schemes and general evildoing.  Their favored weapon is the claw bracer."); }
		}

		write("<br>&lt;br>&lt;br>");

                write("Find out &lt;a href='http://neppyman.irulethe.net/dndwho/index.html' target='mt'>What D&amp;amp;D Character Are You?&lt;/a>, courtesy of");
                write("&lt;a href='http://www.livejournal.com/userinfo.bml?user=neppyman' target='mt'>&lt;img height='17' border='0' src='http://img.livejournal.com/userinfo.gif' align='absmiddle' width='17'>&lt;/a>&lt;b>&lt;a href='http://www.livejournal.com/users/neppyman/' target='mt'>NeppyMan&lt;/a>&lt;/b> &lt;a href='mailto:neppyman@yahoo.com'>(e-mail)&lt;/a>&lt;br>&lt;br><br>");
		write("\<\/samp>\<\/td>\<\/tr>\<\/table>");

		}

		if (survey.detailed.checked) {

		write("<br><hr><br>\<\/center>");

		write("<b>Detailed Results:\<\/b><br><br>");

		if (tie == 0) {

			write("<u>Alignment:\<\/u><br><samp>");

			write("Lawful Good ----- ");
			for (i = 0; i < lg; i++) write("X");
			write(" (",lg,")<br>");

			write("Neutral Good ---- ");
			for (i = 0; i < ng; i++) write("X");
			write(" (",ng,")<br>");

			write("Chaotic Good ---- ");
			for (i = 0; i < cg; i++) write("X");
			write(" (",cg,")<br>");

			write("Lawful Neutral -- ");
			for (i = 0; i < ln; i++) write("X");
			write(" (",ln,")<br>");

			write("True Neutral ---- ");
			for (i = 0; i < nn; i++) write("X");
			write(" (",nn,")<br>");

			write("Chaotic Neutral - ");
			for (i = 0; i < cn; i++) write("X");
			write(" (",cn,")<br>");

			write("Lawful Evil ----- ");
			for (i = 0; i < le; i++) write("X");
			write(" (",le,")<br>");

			write("Neutral Evil ---- ");
			for (i = 0; i < ne; i++) write("X");
			write(" (",ne,")<br>");

			write("Chaotic Evil ---- ");
			for (i = 0; i < ce; i++) write("X");
			write(" (",ce,")<br>");

		} else {

			write("<u>Law &amp; Chaos:\<\/u><br><samp>");

			write("Law ----- ");
			for (i = 0; i < lx; i++) write("X");
			write(" (",lx,")<br>");

			write("Neutral - ");
			for (i = 0; i < nx; i++) write("X");
			write(" (",nx,")<br>");

			write("Chaos --- ");
			for (i = 0; i < cx; i++) write("X");
			write(" (",cx,")<br>");

			write("\<\/samp><br><u>Good &amp; Evil:\<\/u><br><samp>");

			write("Good ---- ");
			for (i = 0; i < xg; i++) write("X");
			write(" (",xg,")<br>");

			write("Neutral - ");
			for (i = 0; i < xn; i++) write("X");
			write(" (",xn,")<br>");

			write("Evil ---- ");
			for (i = 0; i < xe; i++) write("X");
			write(" (",xe,")<br>");

		}

		write("\<\/samp><br><u>Race:\<\/u><br><samp>");

		write("Human ---- ");
		for (i = 0; i < human; i++) write("X");
		write(" (",human,")<br>");

		write("Half-Elf - ");
		for (i = 0; i < halfelf; i++) write("X");
		write(" (",halfelf,")<br>");

		write("Elf ------ ");
		for (i = 0; i < elf; i++) write("X");
		write(" (",elf,")<br>");

		write("Halfling - ");
		for (i = 0; i < halfling; i++) write("X");
		write(" (",halfling,")<br>");

		write("Dwarf ---- ");
		for (i = 0; i < dwarf; i++) write("X");
		write(" (",dwarf,")<br>");

		write("Half-Orc - ");
		for (i = 0; i < halforc; i++) write("X");
		write(" (",halforc,")<br>");

		write("Gnome ---- ");
		for (i = 0; i < gnome; i++) write("X");
		write(" (",gnome,")<br>");

		write("\<\/samp><br><u>Class:\<\/u><br><samp>");

		write("Fighter - ");
		for (i = 0; i < fighter; i++) write("X");
		write(" (",fighter,")<br>");

		write("Ranger -- ");
		for (i = 0; i < ranger; i++) write("X");
		write(" (",ranger,")<br>");

		write("Paladin - ");
		for (i = 0; i < paladin; i++) write("X");
		write(" (",paladin,")<br>");

		write("Cleric -- ");
		for (i = 0; i < cleric; i++) write("X");
		write(" (",cleric,")<br>");

		write("Mage ---- ");
		for (i = 0; i < mage; i++) write("X");
		write(" (",mage,")<br>");

		write("Druid --- ");
		for (i = 0; i < druid; i++) write("X");
		write(" (",druid,")<br>");

		write("Thief --- ");
		for (i = 0; i < thief; i++) write("X");
		write(" (",thief,")<br>");

		write("Bard ---- ");
		for (i = 0; i < bard; i++) write("X");
		write(" (",bard,")<br>");

		write("Monk ---- ");
		for (i = 0; i < monk; i++) write("X");
		write(" (",monk,")<br>");

		write("\<\/samp>");

		}

		write("<br><hr><br><center>")

		write("Like this survey?  Copy, paste, and edit the code to make your own!  Please give me credit if you do so, of course.  ^_^<br><br>");
                write("Questions?  Comments?  Suggestions?  <a href='mailto:neppyman@yahoo.com'>E-mail Me!\<\/a><br><br>");
		write("<a href='javascript: self.close()'>(close this window)\<\/a>");
		write("\<\/body>\<\/html>");
            close();
      }
} 