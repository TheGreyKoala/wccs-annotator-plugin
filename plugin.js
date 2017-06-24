"use strict";

if (Annotator.Plugin) {
	Annotator.Plugin.WCTS = function (element) {
		return {
			pluginInit: function() {
				function referenceTypeFieldLod(field, annotation) {
					field.innerHTML = "";

					let container = document.createElement("div");
					field.appendChild(container);

					let label = document.createElement("label");
					label.innerHTML = "Reference Type:";
					container.appendChild(label);

					let select = document.createElement("select");
					for (let i = 1; i <= 3; i++) {
						let option = document.createElement("option");
						option.value = "type" + i;
						option.text = "Type " + i;
						select.add(option);
					}

					if (annotation.referenceType) {
						select.value = annotation.referenceType;
					}

					container.appendChild(select);
				}

				this.annotator.viewer.addField({ label: "Reference Type", load: referenceTypeFieldLod });
				this.annotator.editor.addField({
					label: "Reference Type",
					load: referenceTypeFieldLod,
					submit: function(field, annotation) {
						annotation.referenceType = field.getElementsByTagName("select")[0].value;
					}
				});
			}
		};
	};
}
