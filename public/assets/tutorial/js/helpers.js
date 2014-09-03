/**
* @license Javascript Helpers Functions
* Copyright (c) 2014, Mario Gallegos, freelance@mariogallegos.com
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license.php
*/

/**
 * Populate form fields.
 *
 * @param string object
 * 	 The index must correspond to the form element id and the value will be set as the form element value.
 * @param string prefix
 * 	Elements id prefix.
 *
 * @returns void
 */
function populateFormFields(object, prefix)
{
	prefix = prefix || '';

	$.each(object, function( index, value )
	{
		var element = prefix +  index.replace(/_/g,'-');

		if($('#' + element).is("input,textarea"))
		{
			switch ($('#' + element).attr('type'))
			{
				case 'checkbox': //missing radio, autocomplete, multiselect
					if((value == 1 && !$('#' + element).is(":checked")) || (value == 0 && $('#' + element).is(":checked")))
					{
						$('#' + element).click();
					}
					break;
				default:
					$('#' + element).val(value);
					break;
			}
		}

		if($('#' + element).is("select"))
		{
			$('#' + element).val(value);
		}
	});
};


/**
 * Create an object from form fields.
 * Use: $('#formId').formToObject();
 *
 * @returns object
 */
$.fn.formToObject = function(removePrefix)
{
	var object = {}, removePrefix = removePrefix || '', index;

	this.find('input,select,textarea').each(function()
	{
		index = $(this).attr('id') || $(this).attr('name');
		index = index.replace(removePrefix, '');
		index =	index.replace(/-/g,'_');

		if($(this).is("input") && $(this).attr("type") == 'checkbox')
		{
			object[index] = $(this).is(':checked')?'1':'0';
		}
		else
		{
			object[index] = $(this).val();
		}
	});

	return object;
};

/**
 * Display alert messages after an element.
 * Use: $('#id').showAlert();
 *
 * @param string cssClass
 * 	Expected values: alert-success, alert-info, alert-warning, alert-danger.
 * @param string textAlert
 * 	Text to be shown.
 * @param integer delay
 * 	An integer indicating the number of milliseconds to delay fadeOut, a null value is also accepted.
 *
 *
 */
$.fn.showAlertAfterElement = function (cssClass, textAlert, delay)
{
	$("#" + this.attr("id") + "-alert").hide();
	$("#" + this.attr("id") + "-alert").alert('close');

	this.after('<div id="' + this.attr("id") + '-alert" class="alert alert-block ' + cssClass + ' fade in"><a class="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>' + textAlert + '</div>');

	$.scrollTo($("#" + this.attr("id") + "-alert").position());
	$("#" + this.attr("id") + "-alert").alert();

	if(delay)
	{
		$("#" + this.attr("id") + "-alert").delay( delay ).fadeOut();
	}
};

/**
 * Display alert messages as first child of an element.
 * Use: $('#id').showAlert();
 *
 * @param string cssClass
 * 	Expected values: alert-success, alert-info, alert-warning, alert-danger.
 * @param string textAlert
 * 	Text to be shown.
 * @param integer delay
 * 	An integer indicating the number of milliseconds to delay fadeOut, a null value is also accepted.
 *
 *
 */
$.fn.showAlertAsFirstChild = function (cssClass, textAlert, delay)
{
	$("#" + this.attr("id") + "-alert").hide();
	$("#" + this.attr("id") + "-alert").alert('close');

	this.prepend('<div id="' + this.attr("id") + '-alert" class="alert alert-block ' + cssClass + ' fade in"><a class="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>' + textAlert + '</div>');

	$.scrollTo($("#" + this.attr("id") + "-alert").position());
	$("#" + this.attr("id") + "-alert").alert();

	if(delay)
	{
		$("#" + this.attr("id") + "-alert").delay( delay ).fadeOut();
	}
};

/**
 * Check if the value of an element is empty.
 * Use: $('#inputId').isEmpty();
 *
 * @returns true if is empty, false otherwise.
 */
$.fn.isEmpty = function()
{
	if(this.is("select"))
	{
		return this.val()=="";
	}
	else
	{
		return $.trim(this.val())=="";
	}
};

/**
 * Enable a group of buttons within a container.
 *
 * @returns void
 */
$.fn.enableButtonGroup = function()
{
	this.find('button').each(function()
	{
		$(this).removeAttr('disabled');
	});
};

/**
 * Disabled a group of buttons within a container.
 *
 * @returns void
 */
$.fn.disabledButtonGroup = function()
{
	this.find('button').each(function()
	{
		$(this).attr('disabled','disabled');
	});
};
