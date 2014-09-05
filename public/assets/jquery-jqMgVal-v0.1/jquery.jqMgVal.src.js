/**
* @license jqMgVal  v0.1 - jQuery MG Validation Plugin
* Copyright (c) 2014, Mario Gallegos, freelance@mariogallegos.com
* jqMgVal's Home page can be found at http://www.mariogallegos.com/open-source-development/jquery-mg-validation/documentation
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license.php
*/

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
			case 'clearForm':
				this.jqMgValclearForm();
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
		successIconClass: 'glyphicon glyphicon-remove',
		failureIconClass: 'glyphicon glyphicon-ok',
		fieldDivContainer: 'form-group',
		validators:{
			positiveInteger:{
				formatter: {
						thousandsSeparator: ',',
						defaultValue: '0'
				},
				validationRegex: '^([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*|[1-9]{1}[0-9]{0,}|0)$',
				allowedCharactersRegex: '^(\\d|,)$',
				regexHelpMessage:'positiveIntegerRegexHelpMessage'
			},
			positiveIntegerNoZero:{
				formatter: {
						thousandsSeparator: ',',
						defaultValue: '1'
				},
				validationRegex: '^([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*|[1-9]{1}[0-9]{0,})$',
				allowedCharactersRegex: '^(\\d|,)$',
				regexHelpMessage:'positiveIntegerNoZeroRegexHelpMessage'
			},
			signedInteger:{
				formatter: {
						thousandsSeparator: ',',
						defaultValue: '0'
				},
				validationRegex: '^(\\+|-)?([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*|[1-9]{1}[0-9]{0,}|0)$',
				allowedCharactersRegex: '^(\\d|,|\\+|-)$',
				regexHelpMessage:'signedIntegerRegexHelpMessage'
			},
			money:{
				formatter: {
						decimalSeparator: '.',
						thousandsSeparator: ',',
						decimalPlaces: 2,
						defaultValue: '0.00'
				},
				validationRegex: '^\\$?([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$',
				allowedCharactersRegex: '^(\\d|,)$',
				regexHelpMessage:'moneyRegexHelpMessage'
			}
		},
		lang: {
				requiredFieldText: '* Required field',
				dateRangeFromRequiredText: 'dateRangeFromRequired',
				dateRangeToRequiredText: 'dateRangeToRequired',
				defaultRegexHelpMessage: 'The value entered is not valid.',
				positiveIntegerRegexHelpMessage: 'The value entered must be a positive integer, example: 1,000 | 1000',
				positiveIntegerNoZeroRegexHelpMessage: 'The value entered must be a positive integer (zero is not allowed), example: 1,000 | 1000',
				signedIntegerRegexHelpMessage: 'The value entered must be an integer, example: -1 | 1 | 1,000 | 1000',
				moneyRegexHelpMessage: 'The value entered must be numeric, example: 1,000.00 | 1000.00 | 1000',
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

		if(this.attr('data-mg-help-message-location') != undefined)
		{
			helpMessageLocation = this.attr('data-mg-help-message-location');
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

		if(this.jqMgValIsEmpty() || (this.val()=='__/__/____' && this.attr('data-mg-daterange') != undefined))
		{
			if(this.attr('data-mg-required') != undefined)
			{
				if(this.attr('data-mg-daterange') == 'from')
				{
					return opts.lang.dateRangeFromRequiredText;
				}
				else if(this.attr('data-mg-daterange') == 'to')
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
			if(this.attr('data-mg-regex') != undefined)
			{
				var RegExpObject = new RegExp(this.attr('data-mg-regex')), regexHelpMessage = '';

				if(RegExpObject.test($.trim(this.val())))
				{
					if(this.attr('data-mg-daterange') != undefined)
					{
						try
						{
							$.datepicker.parseDate( opts.lang.dateFormat, this.val() );
						}
						catch(e)
						{
							switch (this.attr('data-mg-daterange'))
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
					if(this.attr('data-mg-regex-help-message') != undefined)
					{
						regexHelpMessage = this.attr('data-mg-regex-help-message');
					}
					else
					{
						regexHelpMessage = opts.lang.defaultRegexHelpMessage;
					}

					switch (this.attr('data-mg-daterange'))
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

		if(this.attr('data-mg-help-message-location') != undefined)
		{
			helpMessageLocation = this.attr('data-mg-help-message-location');
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
		formGroupDiv.children('.control-label').children('.' + opts.successIconClass.split(' ')[0] + ',.' + opts.failureIconClass.split(' ')[0] + ',.mg-is').remove();
		formGroupDiv.removeClass('has-error');
		formGroupDiv.removeClass('has-success');
		formGroupDiv.addClass(cssClass);
		formGroupDiv.children('.control-label').append("<i class='mg-is'>&nbsp;</i><i class='" + icon + "'></i>");
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
			if($(this).attr('data-mg-validator') != undefined)
			{
				if(opts['validators'][$(this).attr('data-mg-validator')]['validationRegex'] != undefined)
				{
					$(this).attr('data-mg-regex', opts['validators'][$(this).attr('data-mg-validator')]['validationRegex']);
				}

				if(opts['validators'][$(this).attr('data-mg-validator')]['allowedCharactersRegex'] != undefined)
				{
					$(this).attr('data-mg-allowed-characters-regex', opts['validators'][$(this).attr('data-mg-validator')]['allowedCharactersRegex']);
				}

				if(opts['validators'][$(this).attr('data-mg-validator')]['formatter'] != undefined)
				{
					$(this).attr('data-mg-formatter', JSON.stringify(opts['validators'][$(this).attr('data-mg-validator')]['formatter']));
				}

				if(opts['validators'][$(this).attr('data-mg-validator')]['regexHelpMessage'] != undefined)
				{
					$(this).attr('data-mg-regex-help-message', opts.lang[opts['validators'][$(this).attr('data-mg-validator')]['regexHelpMessage']]);
				}
			}

			if($(this).attr('data-mg-ignore') != undefined)
			{
				return true;
			}

			if($(this).attr('data-mg-required') != undefined)
			{
				$(this).jqMgValAddRequiredLabel();
			}

			if($(this).attr('data-mg-daterange') == 'from')
			{
				return true;
			}

			if($(this).attr('data-mg-daterange')=='to')
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
					if($(this).attr('data-mg-formatter') != undefined)
					{
						$(this).val($.fmatter.util.NumberFormat($(this).val().replace(/,/g,''), JSON.parse($(this).attr('data-mg-formatter')) ));
					}

					$(this).jqMgValDisplayMessage('has-success', '');

					if($(this).attr('autocompletemacro') != undefined)
					{
						$(this).trigger('autocompletechange', ['']);
					}
				}
			});

			if($(this).attr('data-mg-allowed-characters-regex') != undefined)
			{
				$(this).keypress(function(event)
				{
					if($.fn.jqMgValKeyPressCrossBrowserCompatibility(event))
					{
						return true;
					}

					var chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
					var RegExpObject = new RegExp($(this).attr('data-mg-allowed-characters-regex'));

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

	$.fn.jqMgValclearForm = function()
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
