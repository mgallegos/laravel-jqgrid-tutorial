/**
* @license jqMgVal  1.0.0 - jQuery MG Validation Plugin
* Copyright (c) 2014, Mario Gallegos, freelance@mariogallegos.com
* jqMgVal's Home page can be found at http://www.
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license.php
*/

//CSS con: help-block, pull-right, has-error, has-success
(function ( $ )
{
	"use strict";

	var opts = {};

	$.fn.jqMgVal = function(action, options)
	{
		opts = $.extend(true, {}, $.fn.jqMgVal.defaults, options);

		switch (action)
		{
			case 'addFormFieldsValidations':
				this.jqMgValAddFormFieldsValidations();
				break;
			case 'cleanForm':
				this.jqMgValCleanForm();
				break;
			case 'isFormValid':
				return this.jqMgValIsFormValid();
				break;
		}

		return this;
	};

	$.fn.jqMgVal.defaults = {
		helpMessageLocation: 'append', //prepend
		helpMessageClass: 'mg-hm',
		invalidFieldJqueryUiEffect: 'shake', //none, ...
		invalidFieldJqueryUiEffectDuration: 600,
		successIconClass: 'fa fa-check-circle',
		failureIconClass: 'fa fa-times-circle',
		fieldDivContainer: 'form-group',
		formatter: {
				decimalSeparator: '.',
				thousandsSeparator: ',',
				decimalPlaces: 2,
				defaultValue: '0.00'
		},
		lang: {
				requiredFieldText: '* Required field',
				dateRangeFromRequiredText: 'dateRangeFromRequired',
				dateRangeToRequiredText: 'dateRangeToRequired',
				defaultRegexHelpMessage: 'defaultRegexHelpMessage',
				dateFormat: 'mm/dd/yy',
				dateInvalid: 'dateInvalid',
				dateInvalidFrom: 'dateInvalidFrom',
				dateInvalidTo: 'dateInvalidTo',
				dateFromRegexHelpMessage: 'dateFromRegexHelpMessage',
				dateToRegexHelpMessage: 'dateToRegexHelpMessage'
		}
	};

	$.fn.jqMgValAddRequiredLabel = function()
	{
		var helpMessageLocation = opts.helpMessageLocation;

		if(this.attr('data-help-message-location') != undefined)
		{
			helpMessageLocation = this.attr('data-help-message-location');
		}

		if(helpMessageLocation == 'append')
		{
			this.closest('.' + opts.helpMessageClass).append('<p class="help-block">' + opts.lang.requiredFieldText + '</p>');
		}
		else if(helpMessageLocation == 'prepend')
		{
			this.closest('.' + opts.helpMessageClass).find('.sr-only').attr('style','position: inherit !important;');
			this.closest('.' + opts.helpMessageClass).prepend('<spam class="help-block pull-right" style="margin: 0 !important;">' + opts.lang.requiredFieldText + '</spam>');
		}
		else
		{
			console.log('Invalid help message location: ' + helpMessageLocation + '. Use append or prepend.');
		}
	};

	$.fn.jqMgValIsEmpty = function()
	{
		if(this.is('select'))
		{
			return this.val() == "";
		}
		else
		{
			return $.trim(this.val()) == "";
		}
	};

	$.fn.jqMgValIsValid = function()
	{
		var regex;

		if(this.jqMgValIsEmpty() || (this.val()=='__/__/____' && this.attr('data-daterange') != undefined))
		{
			if(this.attr('data-required') != undefined)
			{
				if(this.attr('data-daterange') == 'from')
				{
					return opts.lang.dateRangeFromRequiredText;
				}
				else if(this.attr('data-daterange') == 'to')
				{
					return opts.lang.dateRangeToRequiredText;
				}
				else
				{
					return '';
				}
			}
			else
			{
				if(this.val()=='__/__/____')
				{
					this.val('');
				}
				return true;
			}
		}
		else
		{
			if(this.attr('data-regex') != undefined)
			{
				var RegExpObject = new RegExp(this.attr('data-regex')), regexHelpMessage = '';

				if(RegExpObject.test($.trim(this.val())))
				{
					if(this.attr('data-daterange') != undefined)
					{
						try
						{
							$.datepicker.parseDate( opts.lang.dateFormat, this.val() );
						}
						catch(e)
						{
							switch (this.attr('data-daterange'))
							{
							case 'from':
								return opts.lang.dateInvalidFrom;
								break;
							case 'to':
								return opts.lang.dateInvalidTo;
								break;
							default:
								return opts.lang.dateInvalid;
								break;
							}
						}
					}

					return true;
				}
				else
				{
					if(this.attr('data-regex-help-message') != undefined)
					{
						regexHelpMessage = this.attr('data-regex-help-message');
					}
					else
					{
						regexHelpMessage = opts.lang.defaultRegexHelpMessage;
					}

					switch (this.attr('data-daterange'))
					{
						case 'from':
							return opts.lang.dateFromRegexHelpMessage;
							break;
						case 'to':
							return opts.lang.dateToRegexHelpMessage;
							break;
						default:
							return regexHelpMessage;
							break;
					}
				}
			}
			else
			{
				return true;
			}
		}
	};

	$.fn.jqMgValDisplayMessage = function(cssClass, textMsg)
	{
		var helpMessageLocation = opts.helpMessageLocation;

		if(this.attr('data-help-message-location') != undefined)
		{
			helpMessageLocation = this.attr('data-help-message-location');
		}

		var helpMessageTextStyle='';
		var helpMessageDiv = this.closest('.' + opts.helpMessageClass);
		var icon = opts.successIconClass;

		helpMessageDiv.children('.mg-hmt').remove();

		if(helpMessageDiv.find("p").length >= 1 || helpMessageDiv.find("textarea").length == 1)
		{
			helpMessageTextStyle = 'margin: 0 !important;';
			helpMessageDiv.find(".help-block").filter('p').attr('style', 'margin-bottom: 0 !important;');
		}

		if(cssClass == 'has-error')
		{
			helpMessageDiv.append('<p class="mg-hmt help-block" style="' + helpMessageTextStyle + '">' + textMsg + '</p>');
			icon = opts.failureIconClass;
		}

		var formGroupDiv = this.closest('.' + opts.fieldDivContainer);
		//formGroupDiv.children('.control-label').children('.' + opts.successIconClass.split(' ')[0] + ',.' + opts.failureIconClass.split(' ')[0] + ',.mg-is').remove();
		formGroupDiv.children('label').children('.' + opts.successIconClass.split(' ')[0] + ',.' + opts.failureIconClass.split(' ')[0] + ',.mg-is').remove();
		formGroupDiv.removeClass('has-error');
		formGroupDiv.removeClass('has-success');
		formGroupDiv.addClass(cssClass);
		//formGroupDiv.children('.control-label').append("<i class='mg-is'>&nbsp;</i><i class='" + icon + "'></i>");
		formGroupDiv.children('label').append("<i class='mg-is'>&nbsp;</i><i class='" + icon + "'></i>");
	};

	$.fn.jqMgValKeyPressCrossBrowserCompatibility = function(event)
	{
		//Fix firefox
		switch (event.keyCode)
		{
			case 8://backspace
			case 9://tab
			case 33://Re pág.
			case 34://Av Pág.
			case 35://fin
			case 36://inicio
			case 45://insert
			case 46://Supr
				return true;
				break;
			default:
				return false;
		}
	};

	$.fn.jqMgValAddFormFieldsValidations = function()
	{
		this.find('input[type=text],input[type=password],textarea,select').each(function()
		{
			if($(this).attr('data-ignore') != undefined)
			{
				return true;
			}

			if($(this).attr('data-required') != undefined)
			{
				$(this).jqMgValAddRequiredLabel();
			}

			if($(this).attr('data-daterange') == 'from')
			{
				return true;
			}

			if($(this).attr('data-daterange')=='to')
			{
				$(this).focusout(function()
				{
					$(this).parent().validateDateRange();
				});

				return true;
			}

			$(this).focusout(function()
			{
				var valid = $(this).jqMgValIsValid();

				if($.type(valid) == 'string')
				{
					$(this).jqMgValDisplayMessage('has-error', valid);
				}
				else
				{
					if($(this).attr('data-formatter') != undefined)
					{
						switch ($(this).attr('data-formatter'))
						{
							case 'integer':
								$(this).val($.fmatter.util.NumberFormat($(this).val().replace(/,/g,''), {thousandsSeparator: opts.formatter.thousandsSeparator, defaultValue: opts.formatter.defaultValue}));
								break;
							case 'money':
								$(this).val($.fmatter.util.NumberFormat($(this).val().replace(/,/g,''), {decimalSeparator: opts.formatter.decimalSeparator, thousandsSeparator: opts.formatter.thousandsSeparator, decimalPlaces: opts.formatter.decimalPlaces, defaultValue: opts.formatter.defaultValue}));
								break;
							default:
								break;
						}
					}

					$(this).jqMgValDisplayMessage('has-success', '');

					if($(this).attr('autocompletemacro') != undefined)
					{
						$(this).trigger('autocompletechange', ['']);
					}
				}
			});

			if($(this).attr('data-allowed-characters-regex') != undefined)
			{
				$(this).keypress(function(event)
				{
					if($.fn.jqMgValKeyPressCrossBrowserCompatibility(event))
					{
						return true;
					}

					var chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
					var RegExpObject = new RegExp($(this).attr('data-allowed-characters-regex'));

					if(!RegExpObject.test(chr))
					{
						return false;
					}

					return true;
				});
			}

			if($(this).is("select"))
			{
				$(this).change(function()
				{
					$(this).focusout();
				});
			}
		});
	};

	$.fn.jqMgValCleanForm = function()
	{
		this.find('input[type=text],input[type=password],input[type=hidden],textarea').each(function()
		{
			if($(this).attr('name') != '_token')
			{
				$(this).val('');
			}
		});

		this.find('select').each(function()
		{
			$(this).val($('#' + $(this).attr('id') + ' option:first').val());
		});

		this.find('input[type=checkbox]').each(function()
		{
			$(this).removeAttr('checked');
		});

		this.find('.has-error').each(function()
		{
			$(this).removeClass('has-error');
		});

		this.find('.has-success').each(function()
		{
			$(this).removeClass('has-success');
		});

		this.find('.control-label').each(function()
		{
			$(this).find('.' + opts.successIconClass.split(' ')[0] + ',.' + opts.failureIconClass.split(' ')[0] + ',.mg-is').remove();
		});

		this.find('.mg-hmt').remove();
	};

	$.fn.jqMgValIsFormValid = function()
	{
		this.find('input,textarea,select').each(function()
		{
			$(this).focusout();
		});

		if(this.find('.has-error').length>0)
		{
			this.find('.has-error').first().find('.form-control').focus();

			$.scrollTo(this.children('.has-error').first().position());

			if(opts.invalidFieldJqueryUiEffect != 'none')
			{
					this.find('.has-error').effect(opts.invalidFieldJqueryUiEffect, null, opts.invalidFieldJqueryUiEffectDuration);
			}

			return false;
		}
		else
		{
			return true;
		}
	};
}( jQuery ));
