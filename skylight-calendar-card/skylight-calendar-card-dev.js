// ============================================================================
// TRANSLATIONS
// ============================================================================
// To add a new language:
// 1. Add a new entry to the TRANSLATIONS object below
// 2. Set the locale (e.g., 'es-ES' for Spanish)
// 3. Copy the strings from 'en' and translate each value
// ============================================================================

const TRANSLATIONS = {
  en: {
    locale: 'en-US',
    strings: {
      defaultTitle: 'Family Calendar',
      addEvent: 'Add Event',
      today: 'Today',
      month: 'Month',
      week: 'Week',
      schedule: 'Schedule',
      agenda: 'Agenda',
      resetAgenda: 'Jump to Today',
      calendars: 'Calendars',
      calendar: 'Calendar',
      eventTitle: 'Event Title',
      eventTitlePlaceholder: 'Team Meeting',
      allDayEvent: 'All-day event',
      recurring: 'Recurring',
      eventOptions: 'Event Options',
      recurringEventOptions: 'Recurring options',
      recurrenceFrequency: 'Repeat',
      recurrenceEvery: 'Every',
      recurrenceIntervalSuffix: 'interval(s)',
      recurrenceEndsOn: 'Ends on',
      recurrenceCount: 'Occurrences (COUNT)',
      recurrenceWeekdays: 'Weekdays',
      recurrenceNoEndDate: 'No end date (optional)',
      recurrenceDaily: 'Daily',
      recurrenceWeekly: 'Weekly',
      recurrenceMonthly: 'Monthly',
      recurrenceYearly: 'Yearly',
      recurrenceNever: 'Never',
      recurrenceOn: 'On',
      recurrenceAfter: 'After',
      recurrenceOccurrences: 'occurrences',
      recurrenceSelectWeekday: 'Select at least one weekday for weekly recurring events',
      start: 'Start',
      end: 'End',
      startDate: 'Start Date',
      endDate: 'End Date',
      dueDate: 'Due Date',
      location: 'Location',
      locationPlaceholder: 'Conference Room A',
      description: 'Description',
      descriptionPlaceholder: 'Event details...',
      cancel: 'Cancel',
      createEvent: 'Create Event',
      creating: 'Creating...',
      editEvent: 'Edit Event',
      saveChanges: 'Save Changes',
      saving: 'Saving...',
      delete: 'Delete',
      deleting: 'Deleting...',
      deleteEventTitle: 'Delete Event',
      deleteRecurringEventTitle: 'Delete Recurring Event',
      deleteEventConfirm: 'Are you sure you want to delete "{title}"? This action cannot be undone.',
      deleteRecurringPrompt: '"{title}" is a recurring event. How would you like to delete it?',
      editRecurringEventTitle: 'Edit Recurring Event',
      editRecurringPrompt: '"{title}" is a recurring event. How would you like to edit it?',
      editThisOccurrence: 'Edit just this occurrence',
      editThisOccurrenceAndFuture: 'Edit this occurrence and all future occurrences',
      editEntireSeries: 'Edit the entire recurring series',
      deleteThisEventOnly: 'This event only',
      deleteThisOccurrence: 'Delete just this occurrence',
      deleteThisAndFutureEvents: 'This and future events',
      deleteThisOccurrenceAndFuture: 'Delete this occurrence and all future occurrences',
      deleteAllEvents: 'All events',
      deleteEntireSeries: 'Delete the entire recurring series',
      noEvents: 'No events',
      allDay: 'All Day',
      at: 'at',
      duration: 'Duration',
      attendees: 'Attendees',
      recurrence: 'Recurrence',
      recurringEvent: 'Recurring Event',
      unknownAttendee: 'Unknown',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendar Limitation:',
      googleCalendarLimitationBody: 'Editing events is not currently supported for Google Calendar through Home Assistant. You can delete events from here, but to edit please use the Google Calendar app or website.',
      cannotModifyTitle: 'ℹ️ Cannot Modify:',
      cannotModifyBody: 'This event is missing required information (UID) for editing or deletion. You may need to recreate it.',
      untitledEvent: 'Untitled Event',
      noWritableCalendars: 'No writable calendars available',
      eventTitleRequired: 'Event title is required',
      startEndDatesRequired: 'Start and end dates are required',
      endDateBeforeStart: 'End date cannot be before start date',
      startEndTimesRequired: 'Start and end times are required',
      endTimeBeforeStart: 'End time must be after start time',
      failedCreateEvent: 'Failed to create event. Please try again.',
      failedUpdateEvent: 'Failed to update event. Please try again.',
      failedDeleteEvent: 'Failed to delete event. Please try again.',
      homeAssistantUnavailable: 'Home Assistant not available',
      googleCalendarEditError: 'Google Calendar does not support editing events through Home Assistant. Please use the Google Calendar app or website.',
      missingUidError: 'This event is missing required information (UID) and cannot be edited.',
      calendarNoModifyError: 'This calendar does not support event modifications. Try creating a new event instead.',
      createEventServiceError: 'Failed to create event',
      deleteEventServiceError: 'Failed to delete event',
      updateEventServiceError: 'Failed to update event. The calendar may not support modifications.',
      durationHour: '{count} hour',
      durationHours: '{count} hours',
      durationMinute: '{count} minute',
      durationMinutes: '{count} minutes',
      moreEvents: '+{count} more',
      eventTitleWithStartTime: '{title}, {time}',
      // Task & meal plan additions
      taskBacklog: 'Task Backlog',
      openBacklog: 'Backlog',
      addEventType: 'Add',
      addTask: 'Add Task',
      addMealPlan: 'Add Meal',
      taskTitle: 'Task Title',
      taskTitlePlaceholder: 'Write my report',
      project: 'Project',
      projectPlaceholder: 'ProjectName',
      context: 'Context',
      contextPlaceholder: '@work',
      priority: 'Priority',
      priorityNone: 'None',
      priorityLowest: 'Lowest',
      priorityLow: 'Low',
      priorityMedium: 'Medium',
      priorityHigh: 'High',
      priorityHighest: 'Highest',
      noTasks: 'No tasks in backlog',
      createTask: 'Create Task',
      taskSource: 'Save to',
      mealName: 'Meal Name',
      mealNamePlaceholder: 'Pasta Primavera',
      mealType: 'Meal Type',
      mealTypeBreakfast: 'Breakfast',
      mealTypeLunch: 'Lunch',
      mealTypeDinner: 'Dinner',
      mealTypeSnack: 'Snack',
      createMeal: 'Create Meal',
      scheduleTask: 'Schedule Task',
      convertToScheduled: 'Convert to scheduled time',
      createChildTask: 'Create child task with this schedule',
      taskDropPrompt: 'How would you like to schedule this task?',
      taskDropTitle: 'Schedule Task',
      uncategorized: 'Uncategorized',
      failedFetchTasks: 'Failed to fetch tasks',
      failedCreateTask: 'Failed to create task',
      mealPlanPlanner: 'Meal Plan',
      addMealWeekPlan: 'Meal Plan',
      planMeals: 'Create Meals',
      numDays: 'Days',
      createWhat: 'Create'
    }
  },

  fr: {
    locale: 'fr-FR',
    strings: {
      defaultTitle: 'Calendrier familial',
      addEvent: 'Ajouter un événement',
      today: "Aujourd'hui",
      month: 'Mois',
      week: 'Semaine',
      schedule: 'Planning',
      agenda: 'Agenda',
      resetAgenda: "Retour à aujourd'hui",
      calendars: 'Calendriers',
      calendar: 'Calendrier',
      eventTitle: "Titre de l'événement",
      eventTitlePlaceholder: "Réunion d'équipe",
      allDayEvent: 'Événement sur toute la journée',
      recurring: 'Récurrent',
      eventOptions: "Options de l'événement",
      recurringEventOptions: 'Options de récurrence',
      recurrenceFrequency: 'Répéter',
      recurrenceEvery: 'Chaque',
      recurrenceIntervalSuffix: 'intervalle(s)',
      recurrenceEndsOn: 'Se termine le',
      recurrenceCount: 'Occurrences (COUNT)',
      recurrenceWeekdays: 'Jours de la semaine',
      recurrenceNoEndDate: 'Pas de date de fin (optionnel)',
      recurrenceDaily: 'Quotidien',
      recurrenceWeekly: 'Hebdomadaire',
      recurrenceMonthly: 'Mensuel',
      recurrenceYearly: 'Annuel',
      recurrenceNever: 'Jamais',
      recurrenceOn: 'Le',
      recurrenceAfter: 'Après',
      recurrenceOccurrences: 'occurrences',
      recurrenceSelectWeekday: 'Sélectionnez au moins un jour pour les événements hebdomadaires',
      start: 'Début',
      end: 'Fin',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      dueDate: 'Date d\'échéance',
      location: 'Lieu',
      locationPlaceholder: 'Salle de conférence A',
      description: 'Description',
      descriptionPlaceholder: "Détails de l'événement...",
      cancel: 'Annuler',
      createEvent: 'Créer un événement',
      creating: 'Création...',
      editEvent: "Modifier l'événement",
      saveChanges: 'Enregistrer les modifications',
      saving: 'Enregistrement...',
      delete: 'Supprimer',
      deleting: 'Suppression...',
      deleteEventTitle: "Supprimer l'événement",
      deleteRecurringEventTitle: "Supprimer l'événement récurrent",
      deleteEventConfirm: 'Voulez-vous vraiment supprimer "{title}" ? Cette action est irréversible.',
      deleteRecurringPrompt: '"{title}" est un événement récurrent. Comment souhaitez-vous le supprimer ?',
      editRecurringEventTitle: 'Modifier un événement récurrent',
      editRecurringPrompt: '"{title}" est un événement récurrent. Comment souhaitez-vous le modifier ?',
      editThisOccurrence: 'Modifier uniquement cette occurrence',
      editThisOccurrenceAndFuture: 'Modifier cette occurrence et toutes les occurrences futures',
      editEntireSeries: 'Modifier toute la série récurrente',
      deleteThisEventOnly: 'Cet événement uniquement',
      deleteThisOccurrence: 'Supprimer uniquement cette occurrence',
      deleteThisAndFutureEvents: 'Cet événement et les suivants',
      deleteThisOccurrenceAndFuture: 'Supprimer cette occurrence et toutes les occurrences futures',
      deleteAllEvents: 'Tous les événements',
      deleteEntireSeries: 'Supprimer toute la série récurrente',
      noEvents: 'Aucun événement',
      allDay: 'Toute la journée',
      at: 'à',
      duration: 'Durée',
      attendees: 'Participants',
      recurrence: 'Récurrence',
      recurringEvent: 'Événement récurrent',
      unknownAttendee: 'Inconnu',
      googleCalendarLimitationTitle: 'ℹ️ Limitation Google Agenda :',
      googleCalendarLimitationBody: "La modification des événements n'est pas prise en charge pour Google Agenda via Home Assistant. Vous pouvez supprimer des événements ici, mais pour les modifier veuillez utiliser l'application ou le site Google Agenda.",
      cannotModifyTitle: 'ℹ️ Impossible de modifier :',
      cannotModifyBody: 'Cet événement ne contient pas les informations requises (UID) pour être modifié ou supprimé. Vous devrez peut-être le recréer.',
      untitledEvent: 'Événement sans titre',
      noWritableCalendars: 'Aucun calendrier modifiable disponible',
      eventTitleRequired: "Le titre de l'événement est requis",
      startEndDatesRequired: 'Les dates de début et de fin sont requises',
      endDateBeforeStart: 'La date de fin ne peut pas être antérieure à la date de début',
      startEndTimesRequired: 'Les heures de début et de fin sont requises',
      endTimeBeforeStart: "L'heure de fin doit être après l'heure de début",
      failedCreateEvent: "Impossible de créer l'événement. Veuillez réessayer.",
      failedUpdateEvent: "Impossible de modifier l'événement. Veuillez réessayer.",
      failedDeleteEvent: "Impossible de supprimer l'événement. Veuillez réessayer.",
      homeAssistantUnavailable: "Home Assistant n'est pas disponible",
      googleCalendarEditError: "Google Agenda ne permet pas la modification des événements via Home Assistant. Veuillez utiliser l'application ou le site Google Agenda.",
      missingUidError: 'Cet événement ne contient pas les informations requises (UID) et ne peut pas être modifié.',
      calendarNoModifyError: "Ce calendrier ne prend pas en charge les modifications d'événements. Essayez plutôt de créer un nouvel événement.",
      createEventServiceError: "Impossible de créer l'événement",
      deleteEventServiceError: "Impossible de supprimer l'événement",
      updateEventServiceError: "Impossible de modifier l'événement. Le calendrier ne prend peut-être pas en charge les modifications.",
      durationHour: '{count} heure',
      durationHours: '{count} heures',
      durationMinute: '{count} minute',
      durationMinutes: '{count} minutes',
      moreEvents: '+{count} de plus',
      eventTitleWithStartTime: '{title}, {time}'
    }
  },

  de: {
    locale: 'de-DE',
    strings: {
      defaultTitle: 'Familienkalender',
      addEvent: 'Termin hinzufügen',
      today: 'Heute',
      month: 'Monat',
      week: 'Woche',
      schedule: 'Zeitplan',
      agenda: 'Agenda',
      resetAgenda: 'Zu heute springen',
      calendars: 'Kalender',
      calendar: 'Kalender',
      eventTitle: 'Terminname',
      eventTitlePlaceholder: 'Team-Meeting',
      allDayEvent: 'Ganztägiges Ereignis',
      recurring: 'Wiederkehrend',
      eventOptions: 'Terminoptionen',
      recurringEventOptions: 'Wiederholungsoptionen',
      recurrenceFrequency: 'Wiederholen',
      recurrenceEvery: 'Alle',
      recurrenceIntervalSuffix: 'Intervall(e)',
      recurrenceEndsOn: 'Endet am',
      recurrenceCount: 'Anzahl (COUNT)',
      recurrenceWeekdays: 'Wochentage',
      recurrenceNoEndDate: 'Kein Enddatum (optional)',
      recurrenceDaily: 'Täglich',
      recurrenceWeekly: 'Wöchentlich',
      recurrenceMonthly: 'Monatlich',
      recurrenceYearly: 'Jährlich',
      recurrenceNever: 'Nie',
      recurrenceOn: 'Am',
      recurrenceAfter: 'Nach',
      recurrenceOccurrences: 'Vorkommen',
      recurrenceSelectWeekday: 'Wählen Sie mindestens einen Wochentag für wöchentliche Termine aus',
      start: 'Beginn',
      end: 'Ende',
      startDate: 'Startdatum',
      endDate: 'Enddatum',
      dueDate: 'Fälligkeitsdatum',
      location: 'Ort',
      locationPlaceholder: 'Konferenzraum A',
      description: 'Beschreibung',
      descriptionPlaceholder: 'Ereignisdetails...',
      cancel: 'Abbrechen',
      createEvent: 'Termin erstellen',
      creating: 'Wird erstellt...',
      editEvent: 'Termin bearbeiten',
      saveChanges: 'Änderungen speichern',
      saving: 'Wird gespeichert...',
      delete: 'Löschen',
      deleting: 'Wird gelöscht...',
      deleteEventTitle: 'Termin löschen',
      deleteRecurringEventTitle: 'Wiederkehrenden Termin löschen',
      deleteEventConfirm: 'Möchten Sie "{title}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
      deleteRecurringPrompt: '"{title}" ist ein wiederkehrender Termin. Wie möchten Sie ihn löschen?',
      editRecurringEventTitle: 'Wiederkehrenden Termin bearbeiten',
      editRecurringPrompt: '"{title}" ist ein wiederkehrender Termin. Wie möchten Sie ihn bearbeiten?',
      editThisOccurrence: 'Nur dieses Vorkommen bearbeiten',
      editThisOccurrenceAndFuture: 'Dieses und alle zukünftigen Vorkommen bearbeiten',
      editEntireSeries: 'Die gesamte Serie bearbeiten',
      deleteThisEventOnly: 'Nur dieses Ereignis',
      deleteThisOccurrence: 'Nur dieses Vorkommen löschen',
      deleteThisAndFutureEvents: 'Dieses und zukünftige Ereignisse',
      deleteThisOccurrenceAndFuture: 'Dieses Vorkommen und alle zukünftigen Vorkommen löschen',
      deleteAllEvents: 'Alle Ereignisse',
      deleteEntireSeries: 'Die gesamte Serie löschen',
      noEvents: 'Keine Ereignisse',
      allDay: 'Ganztägig',
      at: 'um',
      duration: 'Dauer',
      attendees: 'Teilnehmende',
      recurrence: 'Wiederholung',
      recurringEvent: 'Wiederkehrender Termin',
      unknownAttendee: 'Unbekannt',
      googleCalendarLimitationTitle: 'ℹ️ Google-Kalender-Einschränkung:',
      googleCalendarLimitationBody: 'Das Bearbeiten von Terminen wird für Google Kalender in Home Assistant derzeit nicht unterstützt. Sie können Termine hier löschen, zum Bearbeiten nutzen Sie bitte die Google Kalender App oder Website.',
      cannotModifyTitle: 'ℹ️ Kann nicht bearbeitet werden:',
      cannotModifyBody: 'Diesem Ereignis fehlen erforderliche Informationen (UID) zum Bearbeiten oder Löschen. Möglicherweise müssen Sie es neu erstellen.',
      untitledEvent: 'Unbenannter Termin',
      noWritableCalendars: 'Keine beschreibbaren Kalender verfügbar',
      eventTitleRequired: 'Ein Terminname ist erforderlich',
      startEndDatesRequired: 'Start- und Enddatum sind erforderlich',
      endDateBeforeStart: 'Das Enddatum darf nicht vor dem Startdatum liegen',
      startEndTimesRequired: 'Start- und Endzeit sind erforderlich',
      endTimeBeforeStart: 'Die Endzeit muss nach der Startzeit liegen',
      failedCreateEvent: 'Termin konnte nicht erstellt werden. Bitte erneut versuchen.',
      failedUpdateEvent: 'Termin konnte nicht aktualisiert werden. Bitte erneut versuchen.',
      failedDeleteEvent: 'Termin konnte nicht gelöscht werden. Bitte erneut versuchen.',
      homeAssistantUnavailable: 'Home Assistant nicht verfügbar',
      googleCalendarEditError: 'Google Kalender unterstützt das Bearbeiten von Terminen über Home Assistant nicht. Bitte verwenden Sie die Google Kalender App oder Website.',
      missingUidError: 'Dieses Ereignis enthält keine erforderlichen Informationen (UID) und kann nicht bearbeitet werden.',
      calendarNoModifyError: 'Dieser Kalender unterstützt keine Terminänderungen. Bitte erstellen Sie stattdessen einen neuen Termin.',
      createEventServiceError: 'Termin konnte nicht erstellt werden',
      deleteEventServiceError: 'Termin konnte nicht gelöscht werden',
      updateEventServiceError: 'Termin konnte nicht aktualisiert werden. Der Kalender unterstützt möglicherweise keine Änderungen.',
      durationHour: '{count} Stunde',
      durationHours: '{count} Stunden',
      durationMinute: '{count} Minute',
      durationMinutes: '{count} Minuten',
      moreEvents: '+{count} mehr',
      eventTitleWithStartTime: '{title}, {time}'
    }
  },

  nl: {
    locale: 'nl-NL',
    strings: {
      defaultTitle: 'Familie agenda',
      addEvent: 'Nieuwe afspraak',
      today: 'Vandaag',
      month: 'Maand',
      week: 'Week',
      schedule: 'Schema',
      agenda: 'Agenda',
      resetAgenda: 'Ga naar vandaag',
      calendars: "Agenda's",
      calendar: 'agenda',
      eventTitle: 'Afspraak onderwerp',
      eventTitlePlaceholder: 'Groepsafspraak',
      allDayEvent: 'Hele dag',
      recurring: 'Terugkerend',
      eventOptions: 'Afspraakopties',
      recurringEventOptions: 'terugkerend mogelijkheden',
      recurrenceFrequency: 'Herhaal',
      recurrenceEvery: 'Elke',
      recurrenceIntervalSuffix: 'herhalen elke',
      recurrenceEndsOn: 'Stop op',
      recurrenceCount: 'Gebeurtenissen (COUNT)',
      recurrenceWeekdays: 'Werkdagen',
      recurrenceNoEndDate: 'Geen einddatum (optioneel)',
      recurrenceDaily: 'Dagelijks',
      recurrenceWeekly: 'Wekelijks',
      recurrenceMonthly: 'Maandelijks',
      recurrenceYearly: 'Jaarlijks',
      recurrenceNever: 'Nooit',
      recurrenceOn: 'Op',
      recurrenceAfter: 'Na',
      recurrenceOccurrences: 'gebeurtenissen',
      recurrenceSelectWeekday: 'Selecteer ten minste één dag voor wekelijks terugkerende afspraken',
      start: 'Start',
      end: 'Einde',
      startDate: 'Begindatum',
      endDate: 'Einddatum',
      dueDate: 'Vervaldatum',
      location: 'Locatie',
      locationPlaceholder: 'Vergaderruimte A',
      description: 'Omschrijving',
      descriptionPlaceholder: 'Afspraak details...',
      cancel: 'Annuleren',
      createEvent: 'Afspraak toevoegen',
      creating: 'Aanmaken...',
      editEvent: 'Afspraak bewerken',
      saveChanges: 'Wijzigingen opslaan',
      saving: 'Opslaan...',
      delete: 'Verwijder',
      deleting: 'Verwijderen...',
      deleteEventTitle: 'Afspraak verwijderen',
      deleteRecurringEventTitle: 'Herhaalafspraak verwijderen',
      deleteEventConfirm: 'Ben je er zeker van dat je "{title}" wil verwijderen? Deze actie is onomkeerbaar.',
      deleteRecurringPrompt: '"{title}" is een herhalende afspraak. Hoe wil je hem verwijderen?',
      editRecurringEventTitle: 'Herhalende afspraak bewerken',
      editRecurringPrompt: '"{title}" is een herhalende afspraak. Hoe wil je hem bewerken?',
      editThisOccurrence: 'Alleen deze afspraak wijzigen',
      editThisOccurrenceAndFuture: 'Deze afspraak en alle toekomstige afspraken bewerken',
      editEntireSeries: 'Bewerk de volledige afspraken reeks',
      deleteThisEventOnly: 'Alleen deze afspraak',
      deleteThisOccurrence: 'Verwijder alleen dit moment',
      deleteThisAndFutureEvents: 'Deze en alle toekomstige afspraken',
      deleteThisOccurrenceAndFuture: 'Verwijder deze en alle toekomstige afspraken',
      deleteAllEvents: 'Alle afspraken',
      deleteEntireSeries: 'Verwijder de volledige reeks',
      noEvents: 'Geen afspraken',
      allDay: 'Hele dag',
      at: 'op',
      duration: 'Duur',
      attendees: 'Deelnemers',
      recurrence: 'Terugkerend',
      recurringEvent: 'Terugkerende afpraak',
      unknownAttendee: 'Onbekend',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendar beperking:',
      googleCalendarLimitationBody: 'Het bewerken van Google Calendar afspraken wordt momenteel niet ondersteund in Home Assistant. Je kunt afspraken verwijderen, maar voor het bewerken kun je de Google Calendar app of website gebruiken.',
      cannotModifyTitle: 'ℹ️ Kan het volgende niet aanpassen:',
      cannotModifyBody: 'Deze afspraak mist de vereiste informatie (UID) om te kunnen bewerken of verwijderen. Mogelijk moet je hem opnieuw aanmaken.',
      untitledEvent: 'Afspraak zonder onderwerp',
      noWritableCalendars: "Geen bewerkbare agenda's beschikbaar",
      eventTitleRequired: 'Afspraak onderwerp is verplicht',
      startEndDatesRequired: 'Begin- en einddatum zijn verplicht',
      endDateBeforeStart: 'Einddatum mag niet voor begindatum zijn',
      startEndTimesRequired: 'Begin- en eindtijd is verplicht',
      endTimeBeforeStart: 'Eindtijd mag niet voor begintijd zijn',
      failedCreateEvent: 'Niet gelukt om afspraak aan te maken. Probeer opnieuw.',
      failedUpdateEvent: 'Niet gelukt om afspraak bij te werken. Probeer opnieuw.',
      failedDeleteEvent: 'Niet gelukt om afspraak te verwijderen. Probeer opnieuw.',
      homeAssistantUnavailable: 'Home Assistant niet beschikbaar',
      googleCalendarEditError: 'Het wordt niet ondersteund om Google Calendar afspraken te bewerken binnen Home Assistant. Maak gebruik van de Google Calendar app of website.',
      missingUidError: 'Deze afspraak mist de vereiste informatie (UID) en kan daarom niet bewerkt worden.',
      calendarNoModifyError: 'Het bewerken van afspraken wordt niet ondersteund in deze agenda. Maak een nieuwe afspraak aan.',
      createEventServiceError: 'Niet gelukt om afspraak aan te maken',
      deleteEventServiceError: 'Niet gelukt om afspraak te verwijderen',
      updateEventServiceError: 'Niet gelukt om afspraak bij te werken. Mogelijk wordt dit niet ondersteund.',
      durationHour: '{count} uur',
      durationHours: '{count} uren',
      durationMinute: '{count} minuut',
      durationMinutes: '{count} minuten',
      moreEvents: '+{count} meer',
      eventTitleWithStartTime: '{title}, {time}'
    }
  }
};

// ============================================================================
// TRANSLATION HELPER FUNCTIONS
// ============================================================================

const DEFAULT_LANGUAGE = 'en';

const normalizeLanguage = (language) => {
  if (!language) return DEFAULT_LANGUAGE;
  return language.toLowerCase().split('-')[0];
};

const resolveLanguage = (language) => {
  const normalized = normalizeLanguage(language);
  return TRANSLATIONS[normalized] ? normalized : DEFAULT_LANGUAGE;
};

const interpolate = (template, params = {}) =>
  template.replace(/\{(\w+)\}/g, (_, key) => (params[key] !== undefined ? params[key] : ''));

const translate = (language, key, params = {}) => {
  const resolved = resolveLanguage(language);
  const fallbackStrings = TRANSLATIONS[DEFAULT_LANGUAGE]?.strings || {};
  const strings = TRANSLATIONS[resolved]?.strings || fallbackStrings;
  const fallback = fallbackStrings[key] || key;
  return interpolate(strings[key] || fallback, params);
};

// ============================================================================
// MAIN CALENDAR CARD CLASS
// ============================================================================

class SkylightCalendarCard extends HTMLElement {
  static COMMON_NAMED_COLORS = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    lime: '#00FF00',
    green: '#008000',
    'lime/green': '#00FF00',
    limegreen: '#00FF00',
    blue: '#0000FF',
    yellow: '#FFFF00',
    cyan: '#00FFFF',
    aqua: '#00FFFF',
    'cyan/aqua': '#00FFFF',
    magenta: '#FF00FF',
    fuchsia: '#FF00FF',
    'magenta/fuchsia': '#FF00FF',
    silver: '#C0C0C0',
    gray: '#808080',
    grey: '#808080',
    maroon: '#800000',
    olive: '#808000',
    darkgreen: '#008000',
    'dark green': '#008000',
    'green dark': '#008000',
    greendark: '#008000',
    purple: '#800080',
    teal: '#008080',
    navy: '#000080',
    orange: '#FFA500',
    pink: '#FFC0CB'
  };

  constructor() {
    super();
    this._root = this;
    this._config = {};
    this._events = [];
    this._currentDate = new Date();
    this._viewMode = 'month'; // 'month', 'week-compact', 'week-standard', or 'agenda'
    this._weekStart = new Date();
    this._fetching = false;
    this._lastFetch = null;
    this._loadedEventRange = null;
    this._calendarDataSignatures = {}; // Track per-calendar data for change detection
    this._lastUnchangedDataRender = null; // Throttle unchanged-data UI refreshes
    this._hiddenCalendars = new Set(); // Track which calendars are hidden
    this._calendarCapabilities = {}; // Track calendar capabilities
    this._activeLanguage = DEFAULT_LANGUAGE;
    this._hasCustomTitle = false;
    this._isDarkMode = false;
    this._themeMode = 'auto';
    this._systemThemeMediaQuery = null;
    this._handleSystemThemeChange = (event) => {
      if (this._themeMode !== 'auto') {
        return;
      }

      this._isDarkMode = !!event.matches;
      this.render();
    };
    this._weekStandardFixedOffsetHeight = null;
    this._weekStandardContainerTopInViewport = null;
    this._monthContainerTopInViewport = null;
    this._agendaContainerTopInViewport = null;
    this._agendaStartDate = null;
    this._agendaEndDate = null;
    this._agendaVisibleStartDate = null;
    this._agendaVisibleEndDate = null;
    this._agendaDaysPerScrollLoad = 7;
    this._agendaScrollLoadLock = false;
    this._activeModalBackHandler = null;
    this._outsideClickHandler = null;
    // Task backlog panel
    this._sidePanelOpen = false;
    this._tasks = [];
    this._tasksFetching = false;
    this._tasksLastFetch = null;
    this._expandedTaskId = null;
    this._collapsedGroups = new Set();
    this._filterBarOpen = false;
    this._taskFilters = { contexts: new Set(), tags: new Set(), projects: new Set(), priorities: new Set() };
    // Drag-and-drop state
    this._draggingEvent = null;
    this._draggingTask = null;
    this._draggingType = null;
    // Day-click type picker state
    this._dayPickerDate = null;
    this._dayPickerTime = null;
    this._combinedEditTargets = null;
    this._combinedDeleteTargets = null;
    this._handleViewportResize = () => {
      if (this.isEventManagementDialogOpen()) {
        return;
      }

      if (this._config.compact_height && (this._viewMode === 'week-standard' || this._viewMode === 'agenda' || (this._viewMode === 'month' && !this._config.show_all_events_month))) {
        this.render();
        return;
      }

      this.updateCompactHeaderWrapState();
      this.updateCalendarBadgesScrollState();
    };
  }

  getRootElementById(id) {
    return this._root?.querySelector(`#${id}`) || null;
  }

  getDashboardScopeKey() {
    const pathnameSegments = (window.location?.pathname || '').split('/').filter(Boolean);
    if (pathnameSegments.length > 0) {
      return pathnameSegments[0];
    }

    const hashPath = (window.location?.hash || '').replace(/^#/, '');
    const hashSegments = hashPath.split('/').filter(Boolean);
    if (hashSegments.length > 0) {
      return hashSegments[0];
    }

    return 'default';
  }

  getPreferenceStorageKey() {
    const dashboardScope = this.getDashboardScopeKey();
    const baseKey = this._config.preference_storage_key || (this._config.entities || []).join('|');

    if (!baseKey) {
      return null;
    }

    return `skylight-calendar-card:${dashboardScope}:${baseKey}`;
  }

  normalizeDefaultDarkMode(value) {
    if (value === true) return 'dark';
    if (value === false || value === undefined || value === null || value === '') return 'auto';

    const normalizedValue = String(value).trim().toLowerCase();
    if (['auto', 'light', 'dark'].includes(normalizedValue)) {
      return normalizedValue;
    }

    return 'auto';
  }

  applyThemeMode(mode = this._themeMode) {
    this._themeMode = this.normalizeDefaultDarkMode(mode);

    if (this._themeMode === 'dark') {
      this._isDarkMode = true;
      return;
    }

    if (this._themeMode === 'light') {
      this._isDarkMode = false;
      return;
    }

    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    this._isDarkMode = !!mediaQuery?.matches;
  }

  attachSystemThemeListener() {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mediaQuery || this._systemThemeMediaQuery === mediaQuery) {
      return;
    }

    this.detachSystemThemeListener();
    this._systemThemeMediaQuery = mediaQuery;

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', this._handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(this._handleSystemThemeChange);
    }
  }

  detachSystemThemeListener() {
    if (!this._systemThemeMediaQuery) {
      return;
    }

    if (typeof this._systemThemeMediaQuery.removeEventListener === 'function') {
      this._systemThemeMediaQuery.removeEventListener('change', this._handleSystemThemeChange);
    } else if (typeof this._systemThemeMediaQuery.removeListener === 'function') {
      this._systemThemeMediaQuery.removeListener(this._handleSystemThemeChange);
    }

    this._systemThemeMediaQuery = null;
  }

  loadPersistedPreferences() {
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return;

    try {
      const raw = window.localStorage?.getItem(storageKey);
      if (!raw) return;

      const parsed = JSON.parse(raw);

      if (Array.isArray(parsed.hiddenCalendars)) {
        const knownEntities = new Set(this._config.entities || []);
        this._hiddenCalendars = new Set(parsed.hiddenCalendars.filter((entityId) => knownEntities.has(entityId)));
      }
    } catch (error) {
      console.warn('Failed to load persisted calendar preferences:', error);
    }
  }

  persistPreferences() {
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return;

    try {
      const payload = {
        hiddenCalendars: Array.from(this._hiddenCalendars)
      };
      window.localStorage?.setItem(storageKey, JSON.stringify(payload));
    } catch (error) {
      console.warn('Failed to persist calendar preferences:', error);
    }
  }

  updateCompactHeaderWrapState() {
    if (!this._root) return;

    const headerSelector = this._config.compact_header ? '.header-compact' : '.header';
    const header = this._root.querySelector(headerSelector);
    if (header) {
      const topLevelChildren = Array.from(header.children).filter((child) => child.offsetParent !== null);
      if (topLevelChildren.length <= 1) {
        header.classList.remove('is-wrapped');
      } else {
        const firstTop = topLevelChildren[0].offsetTop;
        const headerWrapped = topLevelChildren.some((child) => Math.abs(child.offsetTop - firstTop) > 1);
        header.classList.toggle('is-wrapped', headerWrapped);
      }
    }

    const controlsSelector = this._config.compact_header ? '.compact-header-controls' : '.header-controls';
    const controls = this._root.querySelector(controlsSelector);
    if (controls) {
      const visibleChildren = Array.from(controls.children).filter((child) => child.offsetParent !== null);
      if (visibleChildren.length <= 1) {
        controls.classList.remove('is-wrapped');
      } else {
        const firstRowTop = visibleChildren[0].offsetTop;
        const isWrapped = visibleChildren.some((child) => Math.abs(child.offsetTop - firstRowTop) > 1);
        controls.classList.toggle('is-wrapped', isWrapped);
      }
    }

    if (!this._config.compact_header) return;

    const badges = this._root.querySelector('.calendar-badges-inline');
    if (!badges) return;

    const visibleBadges = Array.from(badges.children).filter((child) => child.offsetParent !== null);
    if (visibleBadges.length <= 1) {
      badges.classList.remove('is-wrapped');
      return;
    }

    const firstBadgeTop = visibleBadges[0].offsetTop;
    const badgesWrapped = visibleBadges.some((child) => Math.abs(child.offsetTop - firstBadgeTop) > 1);
    badges.classList.toggle('is-wrapped', badgesWrapped);
  }


  updateCalendarBadgesScrollState() {
    if (!this._root || this._config.compact_header) return;

    const badgesContainer = this._root.querySelector('.calendar-badges-container');
    const badges = this._root.querySelector('.calendar-badges');
    if (!badgesContainer || !badges) return;

    const maxScrollLeft = badges.scrollWidth - badges.clientWidth;
    const hasOverflow = maxScrollLeft > 1;
    const showLeftIndicator = hasOverflow && badges.scrollLeft > 1;
    const showRightIndicator = hasOverflow && badges.scrollLeft < (maxScrollLeft - 1);

    badgesContainer.classList.toggle('has-overflow', hasOverflow);
    badgesContainer.classList.toggle('show-left-indicator', showLeftIndicator);
    badgesContainer.classList.toggle('show-right-indicator', showRightIndicator);
  }

  isEventManagementDialogOpen() {
    const modal = this.getRootElementById('event-modal');
    return !!modal && modal.classList.contains('show');
  }

  setConfig(config) {
    if (!config.entities || !Array.isArray(config.entities)) {
      throw new Error('You need to define calendar entities');
    }
    const language = resolveLanguage(config.language || this._hass?.language || this._hass?.locale?.language);
    this._hasCustomTitle = config.title !== undefined && config.title !== null;
    const previousHiddenCalendars = new Set(this._hiddenCalendars);
    const configuredMaxEvents = Number(config.max_events);
    const normalizedDefaultView = config.default_view === 'week'
      ? 'week-compact'
      : config.default_view === 'schedule'
        ? 'week-standard'
        : config.default_view;

    const normalizedCalendarColors = this.normalizeColorMap(config.colors || {});
    const normalizedEventFontColors = this.normalizeColorMap(config.event_font_colors || {});
    const normalizedHeaderColor = this.normalizeSingleColor(config.header_color);
    const normalizedHeaderTextColor = this.normalizeSingleColor(config.header_text_color);
    const hasConfiguredBackgroundOpacity = config.background_opacity !== undefined && config.background_opacity !== null && config.background_opacity !== '';
    const normalizedBackgroundOpacity = hasConfiguredBackgroundOpacity
      ? this.normalizeBackgroundOpacity(config.background_opacity, 0)
      : (config.background_transparent ? 100 : 0);

    const configuredWeekStartHour = Number(config.week_start_hour);
    const normalizedWeekStartHour = Number.isFinite(configuredWeekStartHour)
      ? Math.min(23, Math.max(0, configuredWeekStartHour))
      : 0;
    const configuredWeekEndHour = Number(config.week_end_hour);
    const normalizedWeekEndHour = Number.isFinite(configuredWeekEndHour)
      ? Math.min(23, Math.max(0, configuredWeekEndHour))
      : 23;

    this._config = {
      title: this._hasCustomTitle ? config.title : translate(language, 'defaultTitle'),
      entities: config.entities,
      firstDayOfWeek: config.first_day_of_week || 0, // 0 = Sunday
      colors: normalizedCalendarColors,
      calendar_names: config.calendar_names || {}, // Map entity IDs to friendly names
      calendar_badge_icons: config.calendar_badge_icons || {}, // Map entity IDs to badge icon (mdi:*) or photo URL
      maxEvents: Number.isFinite(configuredMaxEvents) && configuredMaxEvents >= 0 ? configuredMaxEvents : 0,
      default_view: normalizedDefaultView || 'month', // Default view on load
      week_days: config.week_days || [0, 1, 2, 3, 4, 5, 6], // Which days to show in week view
      rolling_days_week_compact: config.rolling_days_week_compact ?? null, // If set, compact week view shows current day + N days instead of week_days
      rolling_days_schedule: config.rolling_days_schedule ?? null, // If set, schedule week view shows current day + N days instead of week_days
      rolling_weeks: config.rolling_weeks || null, // If set, show current week + N weeks in month view
      show_all_events_month: config.show_all_events_month || false, // In month view, show all events and allow week rows to grow while keeping row minimum height
      week_start_hour: normalizedWeekStartHour, // Start hour for week-standard view
      week_end_hour: normalizedWeekEndHour, // End hour for week-standard view
      lock_schedule_hours: config.lock_schedule_hours ?? false, // Keep schedule hours fixed even when events are outside the configured range
      compact_height: config.compact_height || false, // Fit to screen height
      compact_width: config.compact_width || false, // Schedule view: allow day columns to shrink below minimum width
      height_scale: config.height_scale || 1.0, // Scale factor for height (0.5 = 50%, 2.0 = 200%)
      compact_header: config.compact_header || false, // Compact header layout
      hide_calendars: config.hide_calendars || false, // Hide calendar badges from header area
      hide_controls: config.hide_controls || false, // Hide header controls (add/view/theme/navigation)
      hide_dark_mode_toggle: config.hide_dark_mode_toggle || false, // Hide dark mode toggle from header controls
      hide_event_calendar_bubble: config.hide_event_calendar_bubble || false, // Hide calendar initial bubble on events
      show_event_location: config.show_event_location || false, // Show event location in week and schedule views
      event_font_size: config.event_font_size ?? 11, // Font size for event bubble text in every view
      event_time_font_size: config.event_time_font_size ?? 9, // Font size for event time text in every view
      event_location_font_size: config.event_location_font_size ?? 9, // Font size for event location text in week and schedule views
      event_calendar_friendly_name: config.event_calendar_friendly_name || false, // Show friendly calendar name in event bubble area instead of icon
      event_font_colors: normalizedEventFontColors, // Per-calendar font colors for event bubble text
      hide_times_for_calendars: config.hide_times_for_calendars || [], // Hide times in schedule view for specific calendars
      show_current_time_bar: config.show_current_time_bar || false, // Show a "now" indicator in schedule view
      use_24hr_schedule: config.use_24hr_schedule ?? false, // Use 24-hour time notation in schedule view
      header_color: normalizedHeaderColor !== undefined ? normalizedHeaderColor : 'var(--primary-color)', // Custom header background color/gradient
      header_text_color: normalizedHeaderTextColor, // Optional custom header text color (auto contrast by default)
      background_transparent: normalizedBackgroundOpacity >= 100, // Legacy alias for full transparency
      background_opacity: normalizedBackgroundOpacity, // Background transparency percentage (0 = opaque, 100 = transparent)
      background_image_url: config.background_image_url || null, // Optional background image URL for the calendar
      background_image_size: config.background_image_size || 'cover', // CSS background-size for calendar image
      background_image_position: config.background_image_position || 'center', // CSS background-position for calendar image
      background_image_repeat: config.background_image_repeat || 'no-repeat', // CSS background-repeat for calendar image
      combine_calendars: config.combine_calendars ?? false, // Combine exact duplicate events across calendars with zebra striping
      combine_style: this.normalizeCombineStyle(config.combine_style ?? 'bars'), // Visual treatment for merged calendar events
      combine_background: this.normalizeCombineBackground(config.combine_background ?? 'primary'), // Background for merged events: neutral, primary, or hex
      combine_calendars_width: config.combine_calendars_width ?? 18, // Stripe width in pixels for combined calendar zebra styling
      enable_event_management: config.enable_event_management !== false, // Enable create/edit/delete
      readonly_calendars: config.readonly_calendars || [], // Calendars that should not allow modifications
      language: config.language || null, // Language code for translations (e.g., 'en', 'de', 'fr')
      locale: config.locale || null, // Locale override for date/time formatting (e.g., 'en-US')
      color_scheme: this.normalizeDefaultDarkMode(config.color_scheme), // Controls theme mode on initial load: auto, light, or dark
      preference_storage_key: config.preference_storage_key || null, // Optional key to isolate saved preferences per card
      ...config,
      default_view: normalizedDefaultView || 'month', // Re-apply normalization after spread for legacy values
      color_scheme: this.normalizeDefaultDarkMode(config.color_scheme), // Re-apply normalization after spread for color scheme values
      background_opacity: normalizedBackgroundOpacity, // Re-apply normalization after spread for background opacity values
      background_transparent: normalizedBackgroundOpacity >= 100, // Re-apply legacy alias after spread
      // Task backlog & meal plan options (re-applied after spread so defaults win over undefined)
      task_source: config.task_source || 'none', // 'none' | 'ha_todo' | 'obsidian' | 'tasknotes'
      task_entities: config.task_entities || [], // HA todo entity IDs for task source
      task_calendar: config.task_calendar || null, // Default calendar for task-drag events
      ask_calendar_on_task_drop: config.ask_calendar_on_task_drop || false, // Show calendar picker on task drop
      obsidian_api_url: config.obsidian_api_url || null, // e.g. 'http://localhost:27123'
      obsidian_api_token: config.obsidian_api_token || null, // Bearer token for Obsidian REST API
      obsidian_task_folder: config.obsidian_task_folder || 'Tasks', // Vault folder containing task notes
      tasknotes_api_url: config.tasknotes_api_url || null, // e.g. 'http://192.168.0.75:8181'
      tasknotes_api_token: config.tasknotes_api_token || null, // Optional bearer token
      meal_calendar: config.meal_calendar || null, // Default calendar entity for meal plan events
      show_task_panel: config.show_task_panel !== false, // Show backlog panel toggle in header
      // Backlog grouping hierarchy: 'contexts' | 'tags' | 'projects' | 'none'
      backlog_group_l1: config.backlog_group_l1 || 'contexts',
      backlog_group_l2: config.backlog_group_l2 || 'tags',
      backlog_group_inline: config.backlog_group_inline || 'projects',
    };
    this._viewMode = this._config.default_view;
    this.applyThemeMode(this._config.color_scheme);
    this._hiddenCalendars = new Set(
      Array.from(previousHiddenCalendars).filter((entityId) => this._config.entities.includes(entityId))
    );
    this.loadPersistedPreferences();
    this._loadedEventRange = null;
    this._calendarDataSignatures = {};
    this._lastUnchangedDataRender = null;
    this.setWeekStart();
    this.resetAgendaWindowToToday();
    this.render();
    this._activeLanguage = language;
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    let shouldRender = false;

    // Check calendar capabilities when hass is set
    if (!oldHass || this._hass !== oldHass) {
      this.checkAllCalendarCapabilities();
    }

    if (this._themeMode === 'auto') {
      const hassDarkMode = this._hass?.themes?.darkMode;
      if (typeof hassDarkMode === 'boolean' && this._isDarkMode !== hassDarkMode) {
        this._isDarkMode = hassDarkMode;
        shouldRender = true;
      }
    }

    const resolvedLanguage = this.getLanguage();
    if (resolvedLanguage !== this._activeLanguage) {
      this._activeLanguage = resolvedLanguage;
      if (!this._hasCustomTitle) {
        this._config.title = translate(this._activeLanguage, 'defaultTitle');
      }
      shouldRender = true;
    }

    if (shouldRender) {
      this.render();
    }

    // Refresh only when stale or when current view needs dates outside loaded range.
    if (!oldHass) {
      this.ensureEventsForCurrentRange({ force: true });
    } else {
      this.ensureEventsForCurrentRange();
    }
  }

  async checkAllCalendarCapabilities() {
    if (!this._hass) return;

    for (const entityId of this._config.entities) {
      const entity = this._hass.states[entityId];
      if (entity) {
        const features = entity.attributes?.supported_features || 0;

        // Check if this is a Google Calendar (which doesn't support UPDATE/DELETE services)
        const isGoogleCalendar = entityId.includes('google') ||
                                 entity.attributes?.integration === 'google';

        this._calendarCapabilities[entityId] = {
          canCreate: true, // Most calendars support creation
          canUpdate: (features & 2) !== 0, // UPDATE_EVENT = 2
          canDelete: (features & 4) !== 0, // DELETE_EVENT = 4
          isReadonly: this._config.readonly_calendars.includes(entityId),
          isGoogleCalendar: isGoogleCalendar // Track Google Calendar separately
        };
      }
    }
  }


  normalizeColorMap(colorMap) {
    if (!colorMap || typeof colorMap !== 'object') return {};

    return Object.entries(colorMap).reduce((acc, [entityId, color]) => {
      const normalized = this.normalizeSingleColor(color);
      if (normalized !== undefined && normalized !== null && normalized !== '') {
        acc[entityId] = normalized;
      }
      return acc;
    }, {});
  }

  normalizeSingleColor(colorValue) {
    if (colorValue === undefined || colorValue === null) {
      return colorValue;
    }

    const trimmed = String(colorValue).trim();
    if (!trimmed) return trimmed;

    const normalizedName = trimmed
      .toLowerCase()
      .replace(/[()]/g, '')
      .replace(/\s*\/\s*/g, '/')
      .replace(/\s+/g, ' ')
      .trim();
    const mappedColor = SkylightCalendarCard.COMMON_NAMED_COLORS[normalizedName];
    if (mappedColor) {
      return mappedColor;
    }

    return trimmed;
  }

  colorToHex(color) {
    if (!color) return null;

    const normalizedColor = this.normalizeSingleColor(color);
    if (typeof normalizedColor !== 'string') return null;

    const hex3Match = normalizedColor.match(/^#([\da-fA-F]{3})$/);
    if (hex3Match) {
      const [r, g, b] = hex3Match[1].split('');
      return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
    }

    const hex6Match = normalizedColor.match(/^#([\da-fA-F]{6})$/);
    if (hex6Match) {
      return `#${hex6Match[1].toUpperCase()}`;
    }

    return null;
  }

  colorToRgb(color) {
    const normalizedColor = this.normalizeSingleColor(color);
    if (typeof normalizedColor === 'string') {
      const rgbMatch = normalizedColor
        .match(/^rgba?\((.+)\)$/i);
      if (rgbMatch) {
        const normalizedChannels = rgbMatch[1]
          .replace(/\s*\/\s*.*/, '')
          .replace(/,/g, ' ')
          .trim()
          .split(/\s+/)
          .slice(0, 3)
          .map((channel) => Number(channel));

        if (normalizedChannels.length === 3 && normalizedChannels.every((value) => Number.isFinite(value))) {
          const [r, g, b] = normalizedChannels.map((value) => Math.max(0, Math.min(255, Math.round(value))));
          return { r, g, b };
        }
      }
    }

    const hex = this.colorToHex(normalizedColor);
    if (!hex) return null;

    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16)
    };
  }

  colorWithAlpha(color, alpha = 1) {
    const rgb = this.colorToRgb(color);
    if (!rgb) return color;

    const clamped = Math.max(0, Math.min(1, alpha));
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${clamped})`;
  }

  normalizeCombineStyle(styleValue) {
    const normalized = String(styleValue || '').trim().toLowerCase();
    return ['stripes', 'bars', 'dots'].includes(normalized) ? normalized : 'bars';
  }

  normalizeCombineBackground(backgroundValue) {
    const normalized = String(backgroundValue || '').trim();
    if (!normalized) return 'primary';

    const lower = normalized.toLowerCase();
    if (lower === 'neutral' || lower === 'primary') {
      return lower;
    }

    const hex = this.colorToHex(normalized);
    return hex || 'primary';
  }

  getWritableCalendars() {
    return this._config.entities.filter(entityId => {
      const caps = this._calendarCapabilities[entityId];
      return caps && caps.canCreate && !caps.isReadonly;
    });
  }

  getEventIdentityKey(entityId, event) {
    return `${entityId}|${event.uid || ''}|${event.recurring_event_id || ''}|${event.start?.dateTime || event.start?.date || event.start || ''}|${event.end?.dateTime || event.end?.date || event.end || ''}|${event.summary || ''}`;
  }

  async fetchEventsInRange(startDate, endDate) {
    const eventsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
    return Object.values(eventsByCalendar).flat();
  }

  async fetchEventsByCalendarInRange(startDate, endDate) {
    const chunks = this.getDateRangeChunks(startDate, endDate, 30);
    const eventsByCalendar = await Promise.all(
      this._config.entities.map((entityId, index) =>
        this.fetchEventsForCalendar(entityId, index, chunks)
      )
    );

    return this._config.entities.reduce((acc, entityId, index) => {
      acc[entityId] = eventsByCalendar[index] || [];
      return acc;
    }, {});
  }

  async fetchEventsForCalendar(entityId, colorIndex, chunks) {
    const seen = new Set();
    const color = this.normalizeSingleColor(this._config.colors[entityId] || this.getDefaultColor(colorIndex));

    const chunkEventLists = await Promise.all(
      chunks.map(chunk => this.fetchEventsForChunk(entityId, chunk))
    );

    const mergedEvents = [];
    chunkEventLists.forEach(events => {
      if (!events || !Array.isArray(events)) return;

      events.forEach(event => {
        const key = this.getEventIdentityKey(entityId, event);
        if (seen.has(key)) return;
        seen.add(key);

        mergedEvents.push({
          ...event,
          entityId,
          color
        });
      });
    });

    return mergedEvents;
  }

  async fetchEventsForChunk(entityId, chunk) {
    const chunkStartStr = chunk.startDate.toISOString();
    const chunkEndStr = chunk.endDate.toISOString();

    try {
      // Use WebSocket API to get calendar events.
      // Home Assistant command name varies by version.
      return await this.fetchEventsViaWebSocket(entityId, chunkStartStr, chunkEndStr);
    } catch (error) {
      // WebSocket API might not be available in older HA versions or for some integrations
      // Try REST API fallback without logging (this is expected)
      try {
        const startDateOnly = this.formatLocalDate(chunk.startDate);
        const endDateOnly = this.formatLocalDate(chunk.endDate);
        return await this._hass.callApi('GET', `calendars/${entityId}?start=${startDateOnly}T00:00:00Z&end=${endDateOnly}T23:59:59Z`);
      } catch (error2) {
        // Both methods failed - this is a real error
        console.error(`Failed to fetch events for ${entityId}:`, error2.message || error2);
        return [];
      }
    }
  }

  async fetchEventsViaWebSocket(entityId, chunkStartStr, chunkEndStr) {
    return this._hass.callWS({
      type: 'calendar/events',
      entity_id: entityId,
      start_date_time: chunkStartStr,
      end_date_time: chunkEndStr
    });
  }

  mergeEvents(existingEvents, incomingEvents) {
    const mergedByKey = new Map();

    existingEvents.forEach(event => {
      mergedByKey.set(this.getEventIdentityKey(event.entityId, event), event);
    });

    incomingEvents.forEach(event => {
      mergedByKey.set(this.getEventIdentityKey(event.entityId, event), event);
    });

    const merged = Array.from(mergedByKey.values());
    merged.sort((a, b) => this.getEventStartDate(a) - this.getEventStartDate(b));
    return this.limitEvents(merged);
  }

  limitEvents(events) {
    if (this._config.maxEvents === 0) {
      return events;
    }

    return events.slice(0, this._config.maxEvents);
  }

  toStableString(value) {
    if (Array.isArray(value)) {
      return `[${value.map(item => this.toStableString(item)).join(',')}]`;
    }

    if (value && typeof value === 'object') {
      const entries = Object.keys(value)
        .sort()
        .map(key => `${JSON.stringify(key)}:${this.toStableString(value[key])}`);
      return `{${entries.join(',')}}`;
    }

    return JSON.stringify(value);
  }

  getCalendarDataSignature(events = []) {
    return events
      .map(event => {
        const { entityId, color, ...eventData } = event;
        return this.toStableString(eventData);
      })
      .sort()
      .join('|');
  }

  async updateEvents() {
    if (!this._hass || this._fetching) return;

    const { startDate, endDate } = this.getEventFetchRange();
    this._fetching = true;
    this._lastFetch = Date.now();

    try {
      const newEventsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
      const changedCalendars = this._config.entities.filter(entityId => {
        const hasOldSignature = Object.prototype.hasOwnProperty.call(this._calendarDataSignatures, entityId);
        if (!hasOldSignature) {
          return true;
        }

        const oldSignature = this._calendarDataSignatures[entityId];
        const newSignature = this.getCalendarDataSignature(newEventsByCalendar[entityId]);
        return oldSignature !== newSignature;
      });

      if (changedCalendars.length === 0) {
        this._loadedEventRange = { startDate, endDate };

        // Even when HA calendar data hasn't changed, re-inject synthetic TaskNotes
        // events so newly-dated tasks appear immediately without a page reload.
        if (this._config.task_source === 'tasknotes') {
          try {
            const nonSynthetic = this._events.filter(e => e.entityId !== '_tasknotes_');
            const linkedPaths = new Set();
            nonSynthetic.forEach(e => {
              const m = (e.description || '').match(/skylight-task:\/\/tasknotes\/([^\n]+)/);
              if (m) linkedPaths.add(decodeURIComponent(m[1].trim()));
            });
            const dateTasks = await this._fetchTaskNotesWithDates();
            const synthetic = dateTasks
              .filter(t => !linkedPaths.has(t.path))
              .flatMap(t => this._taskNoteToSyntheticEvents(t));
            this._events = this.limitEvents(
              [...nonSynthetic, ...synthetic]
                .sort((a, b) => this.getEventStartDate(a) - this.getEventStartDate(b))
            );
            this._lastUnchangedDataRender = Date.now();
            this.render();
          } catch (_) { /* non-fatal */ }
          return;
        }

        const now = Date.now();
        const shouldRenderForUnchangedData = !this._lastUnchangedDataRender ||
          (now - this._lastUnchangedDataRender >= 15 * 60 * 1000);

        if (shouldRenderForUnchangedData) {
          this._lastUnchangedDataRender = now;
          this.render();
        }

        return;
      }

      this._config.entities.forEach(entityId => {
        this._calendarDataSignatures[entityId] = this.getCalendarDataSignature(newEventsByCalendar[entityId]);
      });

      let mergedEvents = Object.values(newEventsByCalendar)
        .flat()
        .sort((a, b) => this.getEventStartDate(a) - this.getEventStartDate(b));

      // Inject synthetic events from TaskNotes date-bearing tasks.
      // Skip any task that already has a real linked calendar event in mergedEvents,
      // to avoid duplicate entries (real event + synthetic event for the same task).
      if (this._config.task_source === 'tasknotes') {
        try {
          const linkedPaths = new Set();
          mergedEvents.forEach(e => {
            const m = (e.description || '').match(/skylight-task:\/\/tasknotes\/([^\n]+)/);
            if (m) linkedPaths.add(decodeURIComponent(m[1].trim()));
          });
          const dateTasks = await this._fetchTaskNotesWithDates();
          const synthetic = dateTasks
            .filter(t => !linkedPaths.has(t.path))
            .flatMap(t => this._taskNoteToSyntheticEvents(t));
          mergedEvents = [...mergedEvents, ...synthetic]
            .sort((a, b) => this.getEventStartDate(a) - this.getEventStartDate(b));
        } catch (_) { /* non-fatal */ }
      }

      this._events = this.limitEvents(mergedEvents);
      this._loadedEventRange = { startDate, endDate };
      this._lastUnchangedDataRender = Date.now();
      this.render();
    } finally {
      this._fetching = false;
    }
  }

  // Force a full calendar re-fetch by invalidating cached signatures, then update.
  // Call this after any write that changes what should appear on the calendar
  // (task date set, calendar event created, event deleted, etc.) so the view
  // refreshes immediately without waiting for the next poll cycle.
  async _forceEventsRefresh() {
    this._calendarDataSignatures = {};
    return this.updateEvents();
  }

  async extendEventsForRange(startDate, endDate) {
    if (!this._hass || this._fetching) return;

    this._fetching = true;
    this._lastFetch = Date.now();

    try {
      const additionalEvents = await this.fetchEventsInRange(startDate, endDate);
      this._events = this.mergeEvents(this._events, additionalEvents);
      this.render();
    } finally {
      this._fetching = false;
    }
  }

  isDateRangeCoveredByLoadedEvents(targetStartDate, targetEndDate) {
    if (!this._loadedEventRange) return false;

    return targetStartDate >= this._loadedEventRange.startDate &&
           targetEndDate <= this._loadedEventRange.endDate;
  }

  async ensureEventsForCurrentRange({ force = false, renderIfCovered = false } = {}) {
    const shouldRefreshForAge = !this._lastFetch || (Date.now() - this._lastFetch > 60000);
    const { startDate: visibleStartDate, endDate: visibleEndDate } = this.getVisibleDateRange();

    // Background stale refreshes run through this path via hass updates.
    // Keep dialogs stable by postponing only those refreshes while modal is open.
    if (this.isEventManagementDialogOpen() && (force || shouldRefreshForAge)) {
      return;
    }

    if (force || shouldRefreshForAge || !this._loadedEventRange) {
      await this.updateEvents();
      return;
    }

    // Gate fetches on the actually visible range. If the user can already see
    // all required dates from loaded data, avoid any network call.
    if (this.isDateRangeCoveredByLoadedEvents(visibleStartDate, visibleEndDate)) {
      if (renderIfCovered) {
        this.render();
      }
      return;
    }

    // Once visible range falls outside loaded coverage, fetch around current view
    // (with buffer) and only request missing leading/trailing segments.
    const { startDate, endDate } = this.getEventFetchRange();
    const missingRanges = [];

    if (startDate < this._loadedEventRange.startDate) {
      const missingStartEnd = new Date(this._loadedEventRange.startDate);
      missingStartEnd.setDate(missingStartEnd.getDate() - 1);
      missingStartEnd.setHours(23, 59, 59, 999);
      missingRanges.push({ startDate, endDate: missingStartEnd });
    }

    if (endDate > this._loadedEventRange.endDate) {
      const missingEndStart = new Date(this._loadedEventRange.endDate);
      missingEndStart.setDate(missingEndStart.getDate() + 1);
      missingEndStart.setHours(0, 0, 0, 0);
      missingRanges.push({ startDate: missingEndStart, endDate });
    }

    for (const range of missingRanges) {
      await this.extendEventsForRange(range.startDate, range.endDate);
    }

    this._loadedEventRange = {
      startDate: new Date(Math.min(this._loadedEventRange.startDate.getTime(), startDate.getTime())),
      endDate: new Date(Math.max(this._loadedEventRange.endDate.getTime(), endDate.getTime()))
    };

    this.render();
  }

  getEventFetchRange() {
    const { startDate: visibleStart, endDate: visibleEnd } = this.getVisibleDateRange();

    // Keep a small look-behind and look-ahead buffer.
    const startDate = new Date(visibleStart);
    startDate.setDate(startDate.getDate() - 7);

    const endDate = new Date(visibleEnd);
    endDate.setDate(endDate.getDate() + 30);

    return { startDate, endDate };
  }

  getVisibleDateRange() {
    if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      const startDate = new Date(this._agendaStartDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(this._agendaEndDate);
      endDate.setHours(23, 59, 59, 999);
      return { startDate, endDate };
    }

    // Month rolling-weeks mode: from start of anchor week through configured weeks.
    if (this._viewMode === 'month' && this._config.rolling_weeks !== null) {
      const anchorDate = new Date(this._currentDate);
      anchorDate.setHours(0, 0, 0, 0);
      const currentDay = anchorDate.getDay();
      const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;

      const startDate = new Date(anchorDate);
      startDate.setDate(anchorDate.getDate() - diff);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + ((this._config.rolling_weeks + 1) * 7) - 1);
      endDate.setHours(23, 59, 59, 999);
      return { startDate, endDate };
    }

    // Standard month mode: full rendered grid (including adjacent month cells).
    if (this._viewMode === 'month') {
      const year = this._currentDate.getFullYear();
      const month = this._currentDate.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startOffset = (firstDay - this._config.firstDayOfWeek + 7) % 7;
      const totalCells = startOffset + daysInMonth;
      const trailingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

      const startDate = new Date(year, month, 1 - startOffset);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(year, month, daysInMonth + trailingCells);
      endDate.setHours(23, 59, 59, 999);

      return { startDate, endDate };
    }

    // Week views: from first shown day to last shown day.
    const weekDays = this.getWeekDays();
    const startDate = new Date(weekDays[0]);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(weekDays[weekDays.length - 1]);
    endDate.setHours(23, 59, 59, 999);
    return { startDate, endDate };
  }

  getDateRangeChunks(startDate, endDate, chunkDays = 30) {
    const chunks = [];
    let cursor = new Date(startDate);
    cursor.setHours(0, 0, 0, 0);

    while (cursor <= endDate) {
      const chunkStart = new Date(cursor);
      const chunkEnd = new Date(cursor);
      chunkEnd.setDate(chunkEnd.getDate() + chunkDays - 1);
      if (chunkEnd > endDate) {
        chunkEnd.setTime(endDate.getTime());
      }
      chunkEnd.setHours(23, 59, 59, 999);

      chunks.push({ startDate: chunkStart, endDate: chunkEnd });

      cursor = new Date(chunkEnd);
      cursor.setDate(cursor.getDate() + 1);
      cursor.setHours(0, 0, 0, 0);
    }

    return chunks;
  }

  getEventStartDate(event) {
    if (event.start?.dateTime) return new Date(event.start.dateTime);
    if (event.start?.date) return this.parseLocalDate(event.start.date);
    return new Date(event.start);
  }

  parseLocalDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return new Date(dateStr);
    const [year, month, day] = dateStr.split('-').map(Number);
    if (![year, month, day].every(Number.isFinite)) return new Date(dateStr);
    return new Date(year, month - 1, day);
  }

  parsePossiblyLocalDateTime(value) {
    if (!value || typeof value !== 'string') return new Date(value);

    const hasTimezone = /(?:[zZ]|[+-]\d{2}:?\d{2})$/.test(value);
    if (hasTimezone) return new Date(value);

    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/);
    if (!match) return new Date(value);

    const [, year, month, day, hour, minute, second = '0'] = match;
    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute),
      Number(second)
    );
  }

  formatLocalDate(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getDefaultColor(index) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    return colors[index % colors.length];
  }

  connectedCallback() {
    window.addEventListener('resize', this._handleViewportResize);
    window.visualViewport?.addEventListener('resize', this._handleViewportResize);
    this.attachSystemThemeListener();
    this.render();
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleViewportResize);
    window.visualViewport?.removeEventListener('resize', this._handleViewportResize);
    this.detachSystemThemeListener();
  }

  getCompactMaxHeight(containerTopInViewport = null) {
    if (!this._config.compact_height) return null;

    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const containerTop = Math.max(
      containerTopInViewport ?? this.getBoundingClientRect().top,
      0
    );
    const bottomSpacing = 24;
    const minimumHeight = 180;

    return Math.max(minimumHeight, Math.floor(viewportHeight - containerTop - bottomSpacing));
  }

  getCompactContainerStyle(maxHeight = null) {
    if (!this._config.compact_height) return '';

    const resolvedMaxHeight = maxHeight || this.getCompactMaxHeight();
    if (!resolvedMaxHeight) return '';

    return `max-height: ${resolvedMaxHeight}px; overflow-y: auto;`;
  }

  updateWeekStandardFixedOffsetHeightFromDom() {
    if (this._viewMode !== 'week-standard' || !this._config.compact_height || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.week-standard-container');
    const headerSpacer = this._root.querySelector('.time-column-header-spacer');
    const extraSpacer = this._root.querySelector('.time-column-extra-spacer');
    const allDaySpacer = this._root.querySelector('.time-column-allday-spacer');
    if (!container || !headerSpacer || !extraSpacer) return;

    const computed = window.getComputedStyle(container);
    const containerPadding = (parseFloat(computed.paddingTop) || 0) + (parseFloat(computed.paddingBottom) || 0);
    const measuredOffset = Math.ceil(
      containerPadding +
      headerSpacer.getBoundingClientRect().height +
      extraSpacer.getBoundingClientRect().height +
      (allDaySpacer ? allDaySpacer.getBoundingClientRect().height : 0)
    );
    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);

    if (!Number.isFinite(measuredOffset) || !Number.isFinite(measuredContainerTop)) return;

    const offsetChanged = this._weekStandardFixedOffsetHeight === null || Math.abs(this._weekStandardFixedOffsetHeight - measuredOffset) > 1;
    const containerTopChanged = this._weekStandardContainerTopInViewport === null || Math.abs(this._weekStandardContainerTopInViewport - measuredContainerTop) > 1;

    if (offsetChanged || containerTopChanged) {
      this._weekStandardFixedOffsetHeight = measuredOffset;
      this._weekStandardContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }


  updateMonthContainerTopInViewportFromDom() {
    if (this._viewMode !== 'month' || !this._config.compact_height || this._config.show_all_events_month || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.calendar-grid');
    if (!container) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    if (!Number.isFinite(measuredContainerTop)) return;

    const containerTopChanged = this._monthContainerTopInViewport === null || Math.abs(this._monthContainerTopInViewport - measuredContainerTop) > 1;
    if (containerTopChanged) {
      this._monthContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }

  updateAgendaContainerTopInViewportFromDom() {
    if (this._viewMode !== 'agenda' || !this._config.compact_height || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.agenda-container');
    if (!container) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    if (!Number.isFinite(measuredContainerTop)) return;

    const containerTopChanged = this._agendaContainerTopInViewport === null || Math.abs(this._agendaContainerTopInViewport - measuredContainerTop) > 1;
    if (containerTopChanged) {
      this._agendaContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }


  getLanguage() {
    return resolveLanguage(this._config.language || this._hass?.language || this._hass?.locale?.language);
  }

  getLocale() {
    const resolved = this._activeLanguage || this.getLanguage();
    return this._config.locale || TRANSLATIONS[resolved]?.locale || this._hass?.locale?.language || TRANSLATIONS[DEFAULT_LANGUAGE]?.locale || 'en-US';
  }

  t(key, params = {}) {
    return translate(this.getLanguage(), key, params);
  }

  getWeekdayNames(format = 'short') {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { weekday: format });
    const baseDate = new Date(2021, 5, 6);
    const names = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + i);
      names.push(formatter.format(date));
    }
    return names;
  }

  setWeekStart() {
    const date = new Date(this._currentDate);
    const day = date.getDay();
    const diff = (day - this._config.firstDayOfWeek + 7) % 7;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    this._weekStart = date;
  }

  resetAgendaWindowToToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this._currentDate = new Date(today);
    this._agendaStartDate = new Date(today);

    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 14);
    endDate.setHours(23, 59, 59, 999);
    this._agendaEndDate = endDate;
    this._agendaVisibleStartDate = new Date(today);
    const visibleEndDate = new Date(endDate);
    visibleEndDate.setHours(23, 59, 59, 999);
    this._agendaVisibleEndDate = visibleEndDate;
  }

  ensureAgendaWindowInitialized() {
    if (this._agendaStartDate && this._agendaEndDate) return;
    this.resetAgendaWindowToToday();
  }

  getAgendaDays() {
    this.ensureAgendaWindowInitialized();
    const days = [];
    const cursor = new Date(this._agendaStartDate);
    cursor.setHours(0, 0, 0, 0);
    const end = new Date(this._agendaEndDate);
    end.setHours(0, 0, 0, 0);

    while (cursor <= end) {
      days.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }

    return days;
  }

  getAgendaVisibleDateRangeFromDom() {
    if (!this._root || this._viewMode !== 'agenda') return null;

    const container = this.getRootElementById('agenda-container');
    if (!container) return null;

    const containerRect = container.getBoundingClientRect();
    const dayRows = Array.from(container.querySelectorAll('.agenda-day-row'));
    if (dayRows.length === 0) return null;

    const visibleDates = dayRows
      .map((row) => {
        const rect = row.getBoundingClientRect();
        const isVisible = rect.bottom > containerRect.top && rect.top < containerRect.bottom;
        if (!isVisible) return null;
        const rawDate = row.getAttribute('data-date');
        if (!rawDate) return null;
        return new Date(rawDate);
      })
      .filter((date) => date instanceof Date && !Number.isNaN(date.getTime()));

    if (visibleDates.length === 0) return null;

    const startDate = new Date(visibleDates[0]);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(visibleDates[visibleDates.length - 1]);
    endDate.setHours(23, 59, 59, 999);

    return { startDate, endDate };
  }

  updateAgendaVisibleDateRangeFromDom() {
    const visibleRange = this.getAgendaVisibleDateRangeFromDom();
    if (!visibleRange) return;

    this._agendaVisibleStartDate = visibleRange.startDate;
    this._agendaVisibleEndDate = visibleRange.endDate;
    this.updateAgendaPeriodLabelInDom();
  }

  updateAgendaPeriodLabelInDom() {
    if (!this._root || this._viewMode !== 'agenda') return;
    const label = this.getPeriodLabel();
    this._root.querySelectorAll('.month-year').forEach((labelEl) => {
      labelEl.textContent = label;
    });
  }

  getAgendaViewportDayCapacity() {
    if (!this._root || this._viewMode !== 'agenda') {
      return this._agendaDaysPerScrollLoad;
    }

    const container = this.getRootElementById('agenda-container');
    if (!container) {
      return this._agendaDaysPerScrollLoad;
    }

    const rows = Array.from(container.querySelectorAll('.agenda-day-row'));
    if (rows.length === 0) {
      return this._agendaDaysPerScrollLoad;
    }

    const maxHeight = container.clientHeight;
    if (!Number.isFinite(maxHeight) || maxHeight <= 0) {
      return this._agendaDaysPerScrollLoad;
    }

    let consumedHeight = 0;
    let dayCount = 0;

    for (const row of rows) {
      const rowHeight = row.getBoundingClientRect().height;
      if (!Number.isFinite(rowHeight) || rowHeight <= 0) continue;

      if ((consumedHeight + rowHeight) > maxHeight && dayCount > 0) {
        break;
      }

      consumedHeight += rowHeight;
      dayCount += 1;

      if (consumedHeight >= maxHeight) {
        break;
      }
    }

    return Math.max(1, dayCount || this._agendaDaysPerScrollLoad);
  }

  getRollingDaysForView(viewMode = this._viewMode) {
    if (viewMode === 'week-compact' && this._config.rolling_days_week_compact !== null) {
      return this._config.rolling_days_week_compact;
    }

    if (viewMode === 'week-standard' && this._config.rolling_days_schedule !== null) {
      return this._config.rolling_days_schedule;
    }

    return null;
  }

  getWeekDays(viewMode = this._viewMode) {
    const rollingDays = this.getRollingDaysForView(viewMode);

    // If rolling days are set, show current date + N days
    if (rollingDays !== null) {
      const days = [];
      const startDate = new Date(this._currentDate);
      startDate.setHours(0, 0, 0, 0);

      for (let i = 0; i <= rollingDays; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        days.push(date);
      }
      return days;
    }

    // Otherwise use the week-based approach
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(this._weekStart);
      date.setDate(this._weekStart.getDate() + i);
      if (this._config.week_days.includes(date.getDay())) {
        days.push(date);
      }
    }
    return days;
  }

  getStyles() {
    return `
      :host,
      skylight-calendar-card-dev {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        width: 100%;
      }

      .calendar-container {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        width: 100%;
        color-scheme: light;
      }

      .calendar-container::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background: var(--calendar-background, #ffffff);
        opacity: var(--calendar-background-opacity, 1);
        pointer-events: none;
      }

      .calendar-container::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 0;
        background-image: var(--calendar-background-image, none);
        background-size: var(--calendar-background-size, cover);
        background-position: var(--calendar-background-position, center);
        background-repeat: var(--calendar-background-repeat, no-repeat);
        opacity: var(--calendar-background-image-opacity, 0);
        pointer-events: none;
      }

      .calendar-container > * {
        position: relative;
        z-index: 1;
      }

      .calendar-container,
      .calendar-container input,
      .calendar-container select,
      .calendar-container textarea,
      .calendar-container button {
        color-scheme: light;
        font-family: inherit;
      }

      .header {
        background: var(--header-background);
        color: var(--header-text-color, white);
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      .header-compact {
        padding: 16px 24px;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .compact-header-left {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      .header-compact.is-wrapped .compact-header-left,
      .header-compact.is-wrapped .compact-header-controls {
        width: 100%;
        justify-content: center;
      }

      .header.is-wrapped .header-left,
      .header.is-wrapped .header-controls {
        width: 100%;
        justify-content: center;
      }

      .header-controls.is-wrapped .period-controls {
        margin-left: 0;
      }

      .calendar-badges-inline {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .calendar-badges-inline.is-wrapped {
        justify-content: center;
      }

      .calendar-badge-inline {
        padding: 6px 12px !important;
        font-size: 13px !important;
      }

      .calendar-badge-inline .calendar-badge-icon {
        width: 20px !important;
        height: 20px !important;
        font-size: 11px !important;
      }

      .calendar-badge-inline .calendar-badge-name {
        font-size: 13px;
      }

      .header-title {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
      }

      .add-event-button,
      .compact-add-event-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: background 0.2s;
      }

      .add-event-button:hover,
      .compact-add-event-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
        transform: none;
      }

      .add-event-button .icon,
      .compact-add-event-button .icon {
        font-size: 14px;
      }

      .header-controls {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }

      .compact-header-controls {
        justify-content: flex-end;
      }

      .period-controls,
      .compact-period-controls {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 0 1 auto;
        margin-left: auto;
      }

      .header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped .compact-period-controls {
        margin-left: 0;
      }

      .view-mode-buttons {
        display: inline-flex;
        align-items: center;
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border-radius: 8px;
        padding: 0 10px;
        margin-left: 8px;
        position: relative;
      }

      .view-mode-buttons::after {
        content: "⌄";
        font-size: 13px;
        pointer-events: none;
        margin-left: 8px;
        opacity: 0.8;
      }

      .view-mode-select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        padding: 8px 0;
        padding-right: 2px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        min-width: 78px;
      }

      .view-mode-select:focus {
        outline: none;
      }

      .view-mode-select option {
        color: #111827;
        background: #ffffff;
      }

      .nav-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }

      .nav-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
      }

      .today-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: background 0.2s;
      }

      .today-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
      }

      .theme-toggle {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--header-control-border, rgba(255, 255, 255, 0.4));
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        color: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        line-height: 1;
        transition: all 0.2s;
      }

      .theme-toggle:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
      }

      .month-year {
        font-size: 18px;
        font-weight: 500;
        color: inherit;
        min-width: 210px;
        text-align: center;
      }

      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1px;
        background: #e5e7eb;
        border-top: 1px solid #e5e7eb;
      }


      .calendar-grid.compact-month {
        align-items: stretch;
      }

      .calendar-grid.compact-month .day-cell {
        min-height: 0;
        overflow: hidden;
      }

      .day-header {
        background: #f9fafb;
        padding: 12px 8px;
        text-align: center;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .day-cell {
        background: white;
        min-height: 100px;
        min-width: 0;
        padding: 8px;
        position: relative;
        cursor: pointer;
        transition: background 0.2s;
      }

      .day-cell:hover {
        background: #f9fafb;
      }

      .day-cell.other-month {
        background: #fafafa;
        opacity: 0.5;
      }

      .day-cell.today {
        background: #eff6ff;
      }

      .day-number {
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 4px;
      }

      .day-cell.today .day-number {
        background: #3b82f6;
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }

      .event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 4px 6px 4px calc(6px + var(--combine-left-offset, 0px));
        border-radius: 4px;
        font-size: var(--event-bubble-font-size, 11px);
        line-height: 1.2;
        margin-bottom: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-weight: 500;
      }

      .event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }

      .event-time {
        font-size: var(--event-time-font-size, 9px);
        opacity: 0.9;
        margin-right: 4px;
      }

      .more-events {
        font-size: 12px;
        color: #6b7280;
        margin-top: 2px;
        font-weight: 500;
        cursor: pointer;
        width: fit-content;
      }

      .more-events:hover {
        text-decoration: underline;
      }

      .week-compact-container.single-day-modal {
        grid-template-columns: 1fr;
        border-top: none;
        background: transparent;
      }

      /* Week Compact View Styles */
      .week-compact-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1px;
        background: #e5e7eb;
        border-top: 1px solid #e5e7eb;
      }

      .week-day-column {
        background: white;
        padding: 16px 12px;
        min-height: 200px;
      }

      .week-day-header {
        text-align: center;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid #e5e7eb;
      }

      .week-day-name {
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .week-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
      }

      .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }

      .week-day-column.today .week-day-date {
        color: #3b82f6;
      }

      .week-compact-event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        font-size: var(--event-bubble-font-size, 11px);
        padding: 8px 10px 8px calc(10px + var(--combine-left-offset, 0px));
        border-radius: 6px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .week-compact-event:hover {
        transform: translateX(2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .week-compact-event-time {
        font-size: var(--event-time-font-size, 9px);
        font-weight: 600;
        opacity: 0.9;
        margin-bottom: 4px;
      }

      .week-compact-event-title {
        font-size: 1em;
        font-weight: 500;
        line-height: 1.3;
      }

      .week-compact-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.9;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .agenda-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: auto;
        padding-right: 4px;
      }

      .agenda-day-row {
        display: grid;
        grid-template-columns: 88px 1fr;
        gap: 12px;
        border-top: 1px solid #e5e7eb;
        padding-top: 8px;
      }

      .agenda-month-banner {
        width: 100%;
        border-top: 2px solid #d1d5db;
        border-bottom: 1px solid #d1d5db;
        color: #4b5563;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 16px 0;
        margin-top: 6px;
      }

      .agenda-day-label {
        text-align: center;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid #e5e7eb;
      }

      .agenda-day-weekday {
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .agenda-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
      }

      .agenda-day-row.today .agenda-day-label {
        border-bottom-color: #3b82f6;
      }

      .agenda-day-events {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .agenda-event {
        border-radius: 8px;
        padding: 10px 64px 10px calc(12px + var(--combine-left-offset, 0px));
        cursor: pointer;
        overflow: hidden;
        color: var(--event-bubble-text-color, white);
        position: relative;
        height: var(--agenda-event-min-height, 68px);
        box-sizing: border-box;
      }

      .agenda-event-time {
        font-size: var(--event-time-font-size, 10px);
        font-weight: 600;
        margin-bottom: 4px;
        min-height: 1.2em;
      }

      .agenda-event-title {
        font-size: var(--event-bubble-font-size, 16px);
        font-weight: 700;
        min-height: 1.2em;
        line-height: 1.25;
      }

      .agenda-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.95;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
        min-height: 1.2em;
      }

      .agenda-event .week-standard-event-icons {
        position: absolute;
        top: 10px;
        right: 10px;
        margin-top: 0;
      }

      .agenda-empty-day {
        color: #9ca3af;
        font-size: 12px;
        padding: 8px 0;
      }

      /* Week Standard View Styles */

      .calendar-badges-container {
        position: relative;
      }

      .calendar-badges {
        padding: 16px 24px;
        display: flex;
        gap: 12px;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        background: white;
        border-bottom: 1px solid #e5e7eb;
      }

      .calendar-badges-container.has-overflow::after,
      .calendar-badges-container.has-overflow::before {
        position: absolute;
        top: 0;
        bottom: 1px;
        width: 44px;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 800;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.85);
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .calendar-badges-container.has-overflow::after {
        content: '»';
        right: 0;
        color: rgba(17, 24, 39, 0.85);
        background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.has-overflow::before {
        content: '«';
        left: 0;
        color: rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.show-right-indicator::after,
      .calendar-badges-container.show-left-indicator::before {
        opacity: 1;
      }

      .calendar-badges-container.show-right-indicator::after {
        animation: badges-overflow-nudge-right 1.2s ease-in-out infinite;
      }

      .calendar-badges-container.show-left-indicator::before {
        animation: badges-overflow-nudge-left 1.2s ease-in-out infinite;
      }

      @keyframes badges-overflow-nudge-right {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(3px);
        }
      }

      @keyframes badges-overflow-nudge-left {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-3px);
        }
      }

      .calendar-badge {
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 20px;
        border: 2px solid;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        user-select: none;
      }

      .calendar-badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      .calendar-badge-hidden {
        opacity: 0.5;
      }

      .calendar-badge-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
        font-weight: 600;
        overflow: hidden;
      }

      .calendar-badge-icon ha-icon {
        --mdc-icon-size: 14px;
      }

      .calendar-badge-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .calendar-badge-name {
        color: #374151;
      }

      .week-standard-container {
        --week-standard-column-gap: 12px;
        --week-standard-bridge-overlap: 2px;
        display: flex;
        align-items: flex-start;
        background: #f9fafb;
        overflow-x: auto;
        padding: 16px;
        gap: var(--week-standard-column-gap);
        width: 100%;
        box-sizing: border-box;
      }

      .time-column {
        min-width: 60px;
        flex-shrink: 0;
        position: relative;
      }

      .time-column-header-spacer {
        height: 60px;
        background: transparent;
        flex-shrink: 0;
      }

      .time-column-allday-spacer {
        padding: 8px;
        background: transparent;
        border-bottom: 2px solid transparent;
        flex-shrink: 0;
        box-sizing: border-box;
      }

      .time-column-extra-spacer {
        height: 35px;
        background: transparent;
        flex-shrink: 0;
      }

      .time-slot {
        height: 120px;
        font-size: 12px;
        color: #9ca3af;
        text-align: right;
        font-weight: 500;
        position: relative;
        padding-right: 8px;
        display: flex;
        align-items: flex-start;
        padding-top: 0;
        box-sizing: border-box;
        border-top: 1px solid transparent;
      }

      .time-slot-label {
        position: absolute;
        top: -6px;
        right: 8px;
        line-height: 1;
      }

      .week-standard-day-column {
        flex: 1;
        min-width: 140px;
        background: white;
        border-radius: 8px;
        overflow: visible;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }

      .week-standard-container.compact-width .week-standard-day-column {
        min-width: 0;
      }

      /* When the task panel is open, allow day columns to shrink so the schedule
         view compresses instead of scrolling horizontally */
      .calendar-container.has-task-panel .week-standard-day-column {
        min-width: 80px;
      }

      .week-standard-day-header {
        padding: 16px;
        text-align: center;
        border-bottom: 1px solid #e5e7eb;
        background: white;
      }

      .week-standard-day-name {
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .week-standard-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .day-time-slots {
        position: relative;
        min-height: 600px;
      }

      .all-day-events {
        padding: 8px;
        background: #f9fafb;
        border-bottom: 2px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
        overflow: visible;
      }

      .all-day-event {
        padding: 4px 8px 4px calc(8px + var(--combine-left-offset, 0px));
        color: var(--event-bubble-text-color, white);
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-size: var(--event-bubble-font-size, 11px);
        flex-shrink: 0;
        height: 24px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        overflow: visible;
        position: relative;
      }

      .all-day-event.continues-prev {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      .all-day-event.continues-next {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .all-day-event.bridge-prev {
        margin-left: calc(-1 * (var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)));
        padding-left: calc(8px + var(--week-standard-column-gap) + var(--week-standard-bridge-overlap) + var(--combine-left-offset, 0px));
      }

      .all-day-event.bridge-next {
        margin-right: calc(-1 * (var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)));
        padding-right: calc(8px + var(--week-standard-column-gap) + var(--week-standard-bridge-overlap));
      }

      .all-day-event-spacer {
        height: 24px;
        flex-shrink: 0;
      }

      .all-day-event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .all-day-event.leading-span-title {
        z-index: 2;
      }

      .all-day-event-title {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: inherit;
        display: block;
        min-width: 0;
        max-width: 100%;
        flex: 1 1 auto;
      }

      .all-day-event-title.spans-multiple-days {
        position: absolute;
        top: 50%;
        left: calc(8px + var(--combine-left-offset, 0px));
        transform: translateY(-50%);
        width: calc(((100% * var(--all-day-title-span-days, 1)) + ((var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)) * var(--all-day-title-gap-count, 0))) - (24px + var(--combine-left-offset, 0px)));
        max-width: calc(((100% * var(--all-day-title-span-days, 1)) + ((var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)) * var(--all-day-title-gap-count, 0))) - (24px + var(--combine-left-offset, 0px)));
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 1;
        pointer-events: none;
      }

      .day-time-slot {
        height: 120px;
        border-top: 1px solid #f3f4f6;
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        transition: background 0.2s;
      }

      .day-time-slot:hover {
        background: rgba(59, 130, 246, 0.05);
      }

      .week-standard-event {
        position: absolute;
        left: 8px;
        right: 8px;
        color: var(--event-bubble-text-color, white);
        padding: 4px 8px 4px calc(8px + var(--combine-left-offset, 0px));
        border-radius: 8px;
        font-size: var(--event-bubble-font-size, 11px);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        z-index: 1;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        box-sizing: border-box;
      }

      .week-standard-event:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10;
      }

      .week-standard-event-title {
        font-weight: 600;
        margin-bottom: 4px;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .week-standard-event-time {
        font-size: var(--event-time-font-size, 9px);
        font-weight: 500;
        opacity: 0.85;
      }

      .week-standard-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.9;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .week-standard-event-calendar-name {
        font-size: 11px;
        font-weight: 600;
        opacity: 0.9;
      }

      .week-standard-event-icons {
        display: flex;
        justify-content: flex-end;
        gap: 4px;
        margin-top: 4px;
      }

      .week-standard-event-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        flex-shrink: 0;
      }

      .current-time-line {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: #ef4444;
        z-index: 5;
        pointer-events: none;
      }

      .current-time-line::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        left: -4px;
        top: -3px;
      }

      .event-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
      }

      .event-modal.show {
        display: flex;
      }

      .modal-content {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 16px;
      }

      .modal-title {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
        margin: 0;
      }

      .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: background 0.2s;
      }

      .modal-close:hover {
        background: #f3f4f6;
      }

      .modal-body {
        color: #374151;
      }

      .modal-row {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
        font-size: 14px;
      }

      .modal-label {
        font-weight: 600;
        min-width: 80px;
        color: #6b7280;
      }

      .modal-value {
        flex: 1;
      }

      #create-event-form,
      #edit-event-form {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .form-group,
      .form-group-inline {
        margin-bottom: 0;
      }

      .form-label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 8px;
      }

      .form-group-inline .form-label {
        margin-bottom: 0;
      }

      .form-inline-row {
        display: grid;
        grid-template-columns: 120px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
      }

      .form-inline-row.form-inline-row-top {
        align-items: start;
      }

      .form-required {
        color: #ef4444;
        margin-left: 4px;
      }

      .form-input {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-input:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-input.error {
        border-color: #ef4444;
      }

      .form-select {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        background: white;
        cursor: pointer;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-select:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-textarea {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        min-height: 80px;
        resize: vertical;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-textarea:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .form-checkbox-group {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .form-checkbox-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 10px 14px;
      }

      .form-checkbox-row {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        margin-bottom: 0;
      }

      .form-checkbox-row .form-group {
        margin-bottom: 0;
      }

      .form-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .form-checkbox-label {
        font-size: 14px;
        color: #374151;
        cursor: pointer;
        user-select: none;
      }

      .recurrence-ends-label {
        margin-bottom: 10px;
      }

      .recurrence-end-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
        margin-bottom: 10px;
      }

      .recurrence-end-option {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #374151;
        cursor: pointer;
      }

      .recurrence-end-option input[type="radio"] {
        margin: 0;
      }

      .recurrence-end-row .form-input {
        margin: 0;
      }

      .recurrence-after-input {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .recurrence-after-input .form-input {
        max-width: 80px;
      }

      .form-error {
        color: #ef4444;
        font-size: 13px;
        margin-top: 4px;
      }

      .form-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        margin-top: 6px;
      }

      .btn {
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        font-family: inherit;
      }

      .btn-primary {
        background: #3b82f6;
        color: white;
      }

      .btn-primary:hover {
        background: #2563eb;
        transform: translateY(-1px);
      }

      .btn-primary:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
      }

      .btn-secondary {
        background: #f3f4f6;
        color: #374151;
      }

      .btn-secondary:hover {
        background: #e5e7eb;
      }

      .btn-danger {
        background: #ef4444;
        color: white;
      }

      .btn-danger:hover {
        background: #dc2626;
        transform: translateY(-1px);
      }

      .btn-danger:disabled {
        background: #fca5a5;
        cursor: not-allowed;
        transform: none;
      }

      .modal-actions {
        display: flex;
        gap: 12px;
        justify-content: space-between;
        margin-top: 24px;
        align-items: center;
      }

      .modal-actions-left {
        display: flex;
        gap: 12px;
      }

      .modal-actions-right {
        display: flex;
        gap: 12px;
      }

      .confirm-dialog {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .confirm-title {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
        margin: 0 0 12px 0;
      }

      .confirm-message {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 20px;
        line-height: 1.5;
      }

      .confirm-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
      }

      .recurring-options {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }

      .recurring-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        cursor: pointer;
        border-radius: 6px;
        transition: background 0.2s;
        margin-bottom: 8px;
      }

      .recurring-option:hover {
        background: #f3f4f6;
      }

      .recurring-option:last-child {
        margin-bottom: 0;
      }

      .recurring-option input[type="radio"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      .recurring-option-label {
        flex: 1;
      }

      .recurring-option-title {
        font-weight: 600;
        color: #111827;
        font-size: 14px;
        margin-bottom: 2px;
      }

      .recurring-option-description {
        font-size: 13px;
        color: #6b7280;
      }

      .error-message {
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: #991b1b;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .success-message {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        color: #166534;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .empty-state {
        padding: 40px 24px;
        text-align: center;
        color: #6b7280;
      }

      .empty-state-icon {
        font-size: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }

      .empty-state-text {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
      }

      .empty-state-subtext {
        font-size: 14px;
        opacity: 0.8;
      }

      .day-modal-event {
        margin-bottom: 16px;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
      }

      .day-modal-event-title {
        font-weight: 600;
        margin-bottom: 4px;
      }

      .day-modal-event-meta {
        font-size: 13px;
        color: #6b7280;
      }

      .day-modal-event-location {
        font-size: 13px;
        color: #6b7280;
        margin-top: 4px;
      }

      .info-banner {
        border-radius: 8px;
        padding: 12px;
        margin-top: 16px;
        font-size: 13px;
      }

      .info-banner.warning {
        background: #fef3c7;
        border: 1px solid #fbbf24;
        color: #92400e;
      }


      .calendar-container.dark-mode {
        color: #e8ecf1;
        color-scheme: dark;
      }

      .calendar-container.dark-mode::before {
        background: var(--calendar-background, #2a2f36);
      }

      .calendar-container.dark-mode,
      .calendar-container.dark-mode input,
      .calendar-container.dark-mode select,
      .calendar-container.dark-mode textarea,
      .calendar-container.dark-mode button {
        color-scheme: dark;
      }

      .calendar-container.dark-mode .week-standard-container,
      .calendar-container.dark-mode .calendar-badges {
        background: #30363f;
        border-color: #4b5563;
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::after {
        color: rgba(248, 250, 252, 0.95);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to left, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::before {
        color: rgba(248, 250, 252, 0.9);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }


      .calendar-container.dark-mode .day-cell,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-standard-day-header,
      .calendar-container.dark-mode .all-day-events,
      .calendar-container.dark-mode .day-time-slot,
      .calendar-container.dark-mode .time-slot,
      .calendar-container.dark-mode .time-slot-label,
      .calendar-container.dark-mode .empty-state {
        background: #353c45;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .time-slot {
        background: #353c45;
        color: #dde3ea;
        border-color: #353c45;
      }

	  .calendar-container.dark-mode .day-header {
        background: #353b42;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }

      .calendar-container.dark-mode .week-standard-day-name,
      .calendar-container.dark-mode .week-standard-day-date,
      .calendar-container.dark-mode .week-day-name,
      .calendar-container.dark-mode .week-day-date {
        background: #3b434d;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .agenda-day-weekday,
      .calendar-container.dark-mode .agenda-day-date {
        background: transparent;
        color: #dde3ea;
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-date {
        color: #3b82f6;
      }

      .calendar-container.dark-mode .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .calendar-container.dark-mode .day-cell:hover,
      .calendar-container.dark-mode .day-time-slot:hover,
      .calendar-container.dark-mode .recurring-option:hover,
      .calendar-container.dark-mode .modal-close:hover,
      .calendar-container.dark-mode .btn-secondary:hover {
        background: #3f4752;
      }

      .calendar-container.dark-mode .day-cell.other-month {
        background: #2f353e;
      }

      .calendar-container.dark-mode .day-number,
      .calendar-container.dark-mode .month-year,
      .calendar-container.dark-mode .modal-title,
      .calendar-container.dark-mode .confirm-title,
      .calendar-container.dark-mode .recurring-option-title {
        color: #f4f7fb;
      }

      .calendar-container.dark-mode .more-events,
      .calendar-container.dark-mode .modal-label,
      .calendar-container.dark-mode .confirm-message,
      .calendar-container.dark-mode .recurring-option-description,
      .calendar-container.dark-mode .day-modal-event-meta,
      .calendar-container.dark-mode .day-modal-event-location,
      .calendar-container.dark-mode .empty-state {
        color: #c7d0db;
      }

      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .modal-content,
      .calendar-container.dark-mode .confirm-dialog,
      .calendar-container.dark-mode .form-input,
      .calendar-container.dark-mode .form-select,
      .calendar-container.dark-mode .form-textarea,
      .calendar-container.dark-mode .recurring-options,
      .calendar-container.dark-mode .btn-secondary,
      .calendar-container.dark-mode .day-modal-event {
        background: #3b434d;
        color: #e2e8f0;
        border-color: #606b7b;
        box-shadow: none;
      }

      .calendar-container.dark-mode .modal-header,
      .calendar-container.dark-mode .modal-row {
        border-color: #5b6676;
      }

      .calendar-container.dark-mode .form-checkbox-label,
      .calendar-container.dark-mode .recurrence-end-option,
      .calendar-container.dark-mode .modal-value,
      .calendar-container.dark-mode .form-label {
        color: #d6dee8;
      }

      .calendar-container.dark-mode .form-required {
        color: #f87171;
      }

      .calendar-container.dark-mode .form-input::placeholder,
      .calendar-container.dark-mode .form-textarea::placeholder {
        color: #9aa6b8;
      }

      .calendar-container.dark-mode input[type="date"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="datetime-local"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="time"]::-webkit-calendar-picker-indicator {
        filter: invert(1) brightness(0.9);
      }

      .calendar-container.dark-mode .btn-secondary {
        border: 1px solid #606b7b;
      }

      .calendar-container.dark-mode .info-banner {
        background: #5a4a34;
        border-color: #8f7a56;
        color: #f3e5c7;
      }

      .calendar-container.dark-mode .view-mode-buttons,
      .calendar-container.dark-mode .add-event-button,
      .calendar-container.dark-mode .compact-add-event-button,
      .calendar-container.dark-mode .nav-button,
      .calendar-container.dark-mode .today-button,
      .calendar-container.dark-mode .theme-toggle {
        background: rgba(226, 232, 240, 0.14);
        border-color: rgba(226, 232, 240, 0.28);
      }

      .calendar-container.dark-mode .view-mode-select {
        color: #f8fafc;
      }

      .calendar-container.dark-mode .view-mode-select option {
        color: #f8fafc;
        background: #1f2937;
      }

      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-header {
        background: #3b434d;
      }

      .calendar-container.dark-mode .agenda-day-row {
        border-top-color: #5b6676;
      }

      .calendar-container.dark-mode .agenda-day-label {
        border-bottom-color: #5b6676;
      }

      .calendar-container.dark-mode .agenda-month-banner {
        border-top-color: #5b6676;
        border-bottom-color: #5b6676;
        color: #c7d0db;
      }

      .calendar-container.dark-mode .agenda-day-date {
        color: #f4f7fb;
      }


      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .week-standard-container,
      .calendar-container.custom-background .calendar-badges,
      .calendar-container.custom-background .day-header,
      .calendar-container.custom-background .day-cell,
      .calendar-container.custom-background .week-day-column,
      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-column,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .all-day-events,
      .calendar-container.custom-background .day-time-slot,
      .calendar-container.custom-background .time-slot,
      .calendar-container.custom-background .time-slot-label,
      .calendar-container.custom-background .week-day-name,
      .calendar-container.custom-background .week-day-date,
      .calendar-container.custom-background .week-standard-day-name,
      .calendar-container.custom-background .week-standard-day-date,
      .calendar-container.custom-background .empty-state {
        background: transparent !important;
      }

      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .all-day-events,
      .calendar-container.custom-background .day-time-slot,
      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .calendar-badges {
        border-color: rgba(255, 255, 255, 0.35) !important;
      }

      .calendar-container.custom-background .calendar-badges-container.has-overflow::after,
      .calendar-container.custom-background .calendar-badges-container.has-overflow::before {
        display: none;
      }


      .calendar-container.custom-background .day-cell.other-month {
        background: rgba(255, 255, 255, 0.12) !important;
      }

      .calendar-container.dark-mode.custom-background .day-cell.other-month {
        background: rgba(0, 0, 0, 0.2) !important;
      }

      @media (max-width: 768px) {
        .header {
          flex-direction: column;
          align-items: stretch;
        }

        .header-controls {
          justify-content: space-between;
        }

        .compact-header-controls {
          justify-content: flex-start;
        }

        .period-controls,
        .compact-period-controls {
          width: 100%;
          justify-content: space-between;
          gap: 8px;
          margin-left: 0;
        }

        .period-controls .month-year,
        .compact-period-controls .month-year {
          flex: 1;
          text-align: center;
        }


        .week-standard-container {
          font-size: 11px;
        }

        .week-standard-day-date {
          font-size: 14px;
        }

        .form-row {
          grid-template-columns: 1fr;
        }

        .form-inline-row {
          grid-template-columns: 88px minmax(0, 1fr);
          gap: 8px;
          align-items: center;
        }

        .form-group-inline .form-label {
          margin-bottom: 0;
        }
      }

      /* ============================================================
         CALENDAR BODY LAYOUT — side-panel flex wrapper
         ============================================================ */

      .calendar-body {
        display: flex;
        /* No overflow:hidden here — that would clip the schedule view's
           scrollable content and break compact_height calculations.
           The task panel hides itself via width:0 + overflow:hidden. */
      }

      .calendar-main {
        flex: 1;
        min-width: 0; /* allow flex item to shrink below content width */
      }

      /* ============================================================
         TASK BACKLOG PANEL
         ============================================================ */

      .task-panel {
        width: 0;
        overflow: hidden;
        transition: width 0.25s ease;
        border-left: 1px solid transparent;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        background: var(--calendar-background, #ffffff);
      }

      .custom-background .task-panel {
        background: transparent;
      }

      .task-panel.task-panel-open {
        width: 260px;
        overflow-y: auto;
        border-left-color: rgba(0,0,0,0.08);
      }

      .dark-mode .task-panel.task-panel-open {
        border-left-color: rgba(255,255,255,0.1);
      }

      .task-panel-header {
        padding: 12px 14px 8px;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: #6b7280;
        border-bottom: 1px solid rgba(0,0,0,0.06);
        white-space: nowrap;
        position: sticky;
        top: 0;
        background: inherit;
        z-index: 1;
      }

      .dark-mode .task-panel-header {
        color: #9ca3af;
        border-bottom-color: rgba(255,255,255,0.08);
      }

      .task-group {
        padding: 4px 0;
      }

      .task-group-l1 {
        padding: 8px 8px 6px;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #374151;
        background: rgba(0,0,0,0.03);
        border-top: 1px solid rgba(0,0,0,0.09);
        margin-top: 4px;
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .task-group:first-child .task-group-l1 {
        margin-top: 0;
        border-top: none;
      }

      .dark-mode .task-group-l1 {
        color: #e5e7eb;
        background: rgba(255,255,255,0.04);
        border-top-color: rgba(255,255,255,0.09);
      }

      .task-group-l1:hover {
        background: rgba(0,0,0,0.06);
      }

      .dark-mode .task-group-l1:hover {
        background: rgba(255,255,255,0.07);
      }

      .task-group-l2 {
        padding: 5px 8px 3px 18px;
        font-size: 12px;
        font-weight: 600;
        color: #111827;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-left: 2px solid rgba(0,0,0,0.1);
        margin-left: 6px;
      }

      .dark-mode .task-group-l2 {
        color: #f3f4f6;
        border-left-color: rgba(255,255,255,0.1);
      }

      .task-group-l2:hover {
        background: rgba(0,0,0,0.03);
      }

      .dark-mode .task-group-l2:hover {
        background: rgba(255,255,255,0.04);
      }

      .group-collapse-icon {
        font-size: 9px;
        flex-shrink: 0;
        opacity: 0.55;
        transition: transform 0.15s;
        display: inline-block;
      }

      .task-item {
        padding: 6px 8px 6px 28px;
        font-size: 14px;
        cursor: grab;
        border-radius: 4px;
        margin: 1px 4px;
        transition: background 0.12s;
        user-select: none;
        color: #374151;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .dark-mode .task-item {
        color: #d1d5db;
      }

      .task-item:hover {
        background: rgba(0,0,0,0.05);
      }

      .dark-mode .task-item:hover {
        background: rgba(255,255,255,0.07);
      }

      .task-item.dragging {
        opacity: 0.4;
        cursor: grabbing;
      }

      .task-item-priority-high  { border-left: 3px solid #ef4444; padding-left: 25px; }
      .task-item-priority-medium { border-left: 3px solid #f59e0b; padding-left: 25px; }
      .task-item-priority-low   { border-left: 3px solid #10b981; padding-left: 25px; }

      .task-item-title {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .task-item-inline {
        font-size: 12px;
        color: #9ca3af;
        white-space: nowrap;
        flex-shrink: 0;
        max-width: 75px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .dark-mode .task-item-inline {
        color: #6b7280;
      }

      .task-item-wrap.expanded .task-item {
        background: rgba(139,92,246,0.08);
      }

      .dark-mode .task-item-wrap.expanded .task-item {
        background: rgba(139,92,246,0.15);
      }

      .task-detail-panel {
        margin: 2px 6px 6px;
        padding: 8px 10px;
        background: rgba(0,0,0,0.03);
        border-radius: 6px;
        border: 1px solid rgba(0,0,0,0.08);
        font-size: 13px;
      }

      .dark-mode .task-detail-panel {
        background: rgba(255,255,255,0.04);
        border-color: rgba(255,255,255,0.08);
      }

      .task-detail-field {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 5px;
      }

      .task-detail-field-col {
        flex-direction: column;
        align-items: flex-start;
      }

      .task-detail-field label {
        font-size: 12px;
        font-weight: 600;
        color: #9ca3af;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        width: 62px;
        flex-shrink: 0;
      }

      .task-detail-field-col label {
        width: auto;
        margin-bottom: 2px;
      }

      .task-detail-input {
        flex: 1;
        font-size: 13px;
        padding: 3px 6px;
        border: 1px solid var(--divider-color, #e5e7eb);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #374151);
        min-width: 0;
        font-family: inherit;
      }

      .dark-mode .task-detail-input {
        background: rgba(255,255,255,0.05);
        border-color: rgba(255,255,255,0.15);
        color: #d1d5db;
      }

      .task-detail-field-col .task-detail-input {
        width: 100%;
        box-sizing: border-box;
      }

      .task-detail-textarea {
        min-height: 46px;
        resize: vertical;
      }

      .task-detail-time {
        flex: 0 0 78px;
        width: 78px;
      }

      .task-detail-actions {
        display: flex;
        gap: 6px;
        justify-content: flex-end;
        margin-top: 8px;
      }

      .task-panel-empty {
        padding: 24px 14px;
        font-size: 13px;
        color: #9ca3af;
        text-align: center;
      }

      .task-filter-bar {
        border-bottom: 1px solid rgba(0,0,0,0.06);
        background: inherit;
        position: sticky;
        top: 37px; /* below task-panel-header */
        z-index: 1;
      }

      .dark-mode .task-filter-bar {
        border-bottom-color: rgba(255,255,255,0.08);
      }

      .task-filter-toggle {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 6px 14px;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #9ca3af;
        cursor: pointer;
        user-select: none;
      }

      .task-filter-toggle:hover {
        color: #6b7280;
      }

      .dark-mode .task-filter-toggle {
        color: #6b7280;
      }

      .dark-mode .task-filter-toggle:hover {
        color: #9ca3af;
      }

      .task-filter-toggle .filter-active-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #8b5cf6;
        flex-shrink: 0;
      }

      .task-filter-panel {
        padding: 6px 10px 10px;
      }

      .task-filter-section-label {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: #9ca3af;
        padding: 5px 2px 3px;
      }

      .dark-mode .task-filter-section-label {
        color: #6b7280;
      }

      .task-filter-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 4px;
      }

      .task-filter-chip {
        font-size: 13px;
        padding: 2px 8px;
        border-radius: 20px;
        border: 1px solid rgba(0,0,0,0.15);
        background: transparent;
        color: #6b7280;
        cursor: pointer;
        user-select: none;
        font-family: inherit;
        transition: background 0.1s, color 0.1s;
        white-space: nowrap;
      }

      .dark-mode .task-filter-chip {
        border-color: rgba(255,255,255,0.15);
        color: #9ca3af;
      }

      .task-filter-chip:hover {
        border-color: #8b5cf6;
        color: #8b5cf6;
      }

      .task-filter-chip.active {
        background: #8b5cf6;
        border-color: #8b5cf6;
        color: #fff;
      }

      .task-filter-clear {
        font-size: 13px;
        color: #9ca3af;
        cursor: pointer;
        padding: 2px 4px;
        text-decoration: underline;
        display: inline-block;
        margin-top: 4px;
        background: none;
        border: none;
        font-family: inherit;
      }

      .task-filter-clear:hover {
        color: #ef4444;
      }

      /* ============================================================
         CREATE TASK MODAL — priority pills & suggestion chips
         ============================================================ */

      #create-task-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .task-priority-row {
        display: flex;
        align-items: center;
        gap: 0;
        flex-wrap: wrap;
      }

      .task-priority-pill {
        padding: 5px 12px;
        font-size: 14px;
        font-weight: 600;
        border: 2px solid #e5e7eb;
        border-right-width: 0;
        background: none;
        cursor: pointer;
        font-family: inherit;
        color: #6b7280;
        transition: background 0.15s, color 0.15s, border-color 0.15s;
        white-space: nowrap;
      }

      .task-priority-pill:first-child { border-radius: 8px 0 0 8px; }
      .task-priority-pill:last-child  { border-radius: 0 8px 8px 0; border-right-width: 2px; }

      .task-priority-pill.active-none     { background: #f3f4f6; color: #374151; border-color: #9ca3af; }
      .task-priority-pill.active-lowest   { background: #ede9fe; color: #7c3aed; border-color: #7c3aed; }
      .task-priority-pill.active-low      { background: #dbeafe; color: #1d4ed8; border-color: #1d4ed8; }
      .task-priority-pill.active-medium   { background: #fef9c3; color: #a16207; border-color: #ca8a04; }
      .task-priority-pill.active-high     { background: #ffedd5; color: #c2410c; border-color: #ea580c; }
      .task-priority-pill.active-highest  { background: #fee2e2; color: #b91c1c; border-color: #ef4444; }

      .task-create-dates-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }

      .task-create-date-group label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #6b7280;
        margin-bottom: 4px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .task-create-date-group input {
        width: 100%;
        padding: 8px 10px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        box-sizing: border-box;
        transition: border-color 0.2s;
      }

      .task-create-date-group input:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .task-suggest-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .task-suggest-group label {
        font-size: 13px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .task-suggest-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 5px;
      }

      .task-suggest-chip {
        font-size: 13px;
        padding: 2px 9px;
        border-radius: 12px;
        border: 1.5px solid #d1d5db;
        background: none;
        color: #6b7280;
        cursor: pointer;
        font-family: inherit;
        transition: background 0.12s, color 0.12s, border-color 0.12s;
      }

      .task-suggest-chip:hover { border-color: #9ca3af; color: #374151; }
      .task-suggest-chip.active { background: #8b5cf6; border-color: #8b5cf6; color: #fff; }

      /* ============================================================
         BACKLOG TOGGLE BUTTON (in header)
         ============================================================ */

      .backlog-toggle-button {
        background: var(--header-control-bg);
        border: 1px solid var(--header-control-border);
        color: var(--header-text-color, white);
        border-radius: 6px;
        padding: 6px 12px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        white-space: nowrap;
        font-family: inherit;
      }

      .backlog-toggle-button:hover {
        background: var(--header-control-bg-hover);
        border-color: var(--header-control-border-hover);
      }

      .backlog-toggle-button.active {
        background: var(--header-control-bg-active);
      }

      /* ============================================================
         ADD-TYPE DROPDOWN
         ============================================================ */

      .add-event-wrapper {
        position: relative;
      }

      .add-type-menu {
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.14);
        z-index: 99999;
        min-width: 170px;
        overflow: hidden;
        display: none;
      }

      .add-type-menu.dark-mode {
        background: #1f2937;
        border-color: #374151;
        box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      }

      .add-type-menu.open {
        display: block;
      }

      .add-type-menu-item {
        padding: 10px 16px;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.1s;
        white-space: nowrap;
        color: #111827;
        font-family: inherit;
      }

      .add-type-menu.dark-mode .add-type-menu-item {
        color: #f3f4f6;
      }

      .add-type-menu-item:hover {
        background: #f3f4f6;
      }

      .add-type-menu.dark-mode .add-type-menu-item:hover {
        background: #374151;
      }

      /* ============================================================
         DRAG AND DROP
         ============================================================ */

      .day-cell.drag-over,
      .week-standard-day-column.drag-over,
      .week-day-column.drag-over {
        background: rgba(99, 102, 241, 0.1) !important;
        outline: 2px dashed rgba(99, 102, 241, 0.5);
        outline-offset: -2px;
      }

      .day-time-slot.drag-over {
        background: rgba(99, 102, 241, 0.15) !important;
        outline: 2px dashed rgba(99, 102, 241, 0.6);
        outline-offset: -1px;
      }

      .all-day-events.drag-over {
        background: rgba(99, 102, 241, 0.12) !important;
        outline: 2px dashed rgba(99, 102, 241, 0.55);
        outline-offset: -2px;
      }

      .event[draggable="true"] {
        cursor: grab;
      }

      .event.dragging {
        opacity: 0.35;
        cursor: grabbing;
      }

      /* ============================================================
         MEAL TYPE GRID (create meal modal)
         ============================================================ */

      .meal-type-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }

      .meal-type-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        transition: border-color 0.1s, background 0.1s;
      }

      .meal-type-option:hover {
        border-color: #a5b4fc;
        background: #f5f3ff;
      }

      .dark-mode .meal-type-option {
        border-color: #374151;
        color: #d1d5db;
      }

      .dark-mode .meal-type-option:hover {
        border-color: #6366f1;
        background: rgba(99,102,241,0.08);
      }

      .meal-type-option input[type="radio"] {
        accent-color: #6366f1;
      }

      /* ============================================================
         DAY-CLICK TYPE PICKER
         ============================================================ */

      .day-create-picker {
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.14);
        z-index: 99999;
        min-width: 160px;
        overflow: hidden;
        display: none;
      }

      .day-create-picker.open { display: block; }

      .day-create-picker.dark-mode {
        background: #1f2937;
        border-color: #374151;
        box-shadow: 0 4px 16px rgba(0,0,0,0.4);
      }

      .day-create-picker-item {
        padding: 10px 16px;
        font-size: 13px;
        cursor: pointer;
        transition: background 0.1s;
        white-space: nowrap;
        color: #111827;
        font-family: inherit;
      }

      .day-create-picker.dark-mode .day-create-picker-item { color: #f3f4f6; }

      .day-create-picker-item:hover { background: #f3f4f6; }

      .day-create-picker.dark-mode .day-create-picker-item:hover { background: #374151; }

      /* ============================================================
         MEAL WEEK PLANNER
         ============================================================ */

      .meal-week-controls {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        align-items: flex-end;
        margin-bottom: 8px;
      }

      .meal-week-scroll {
        overflow-x: auto;
        margin-top: 4px;
      }

      .meal-week-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 12px;
        min-width: 480px;
      }

      .meal-week-table th {
        text-align: left;
        padding: 6px 8px;
        background: #f3f4f6;
        border-bottom: 1px solid #e5e7eb;
        font-weight: 600;
        color: #374151;
        white-space: nowrap;
      }

      .meal-week-table td {
        padding: 4px 6px;
        border-bottom: 1px solid #f3f4f6;
        vertical-align: middle;
      }

      .meal-week-table .day-label {
        white-space: nowrap;
        color: #374151;
        font-weight: 500;
        min-width: 72px;
        font-size: 12px;
      }

      .meal-week-table input[type="text"] {
        width: 100%;
        min-width: 76px;
        padding: 4px 6px;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        font-size: 12px;
        font-family: inherit;
        box-sizing: border-box;
        background: white;
        color: #111827;
      }

      .meal-week-table input[type="text"]:focus {
        outline: none;
        border-color: var(--primary-color, #6366f1);
        box-shadow: 0 0 0 2px rgba(99,102,241,0.15);
      }

      .dark-mode .meal-week-table th {
        background: #374151;
        border-color: #4b5563;
        color: #d1d5db;
      }

      .dark-mode .meal-week-table td { border-color: #374151; }

      .dark-mode .meal-week-table .day-label { color: #d1d5db; }

      .dark-mode .meal-week-table input[type="text"] {
        background: #1f2937;
        border-color: #4b5563;
        color: #f3f4f6;
      }
    `;
  }

  render() {
    const today = new Date();
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();

    const resolvedHeaderBackground = this.normalizeSingleColor(this._config.header_color) || 'var(--primary-color)';
    const resolvedHeaderTextColor = this.normalizeSingleColor(this._config.header_text_color)
      || this.getContractColor(resolvedHeaderBackground);
    const headerControlBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.16);
    const headerControlHoverBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.24);
    const headerControlActiveBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.32);
    const headerControlBorder = this.colorWithAlpha(resolvedHeaderTextColor, 0.4);
    const headerControlBorderHover = this.colorWithAlpha(resolvedHeaderTextColor, 0.6);
    const headerStyle = `--header-background: ${resolvedHeaderBackground}; --header-text-color: ${resolvedHeaderTextColor}; --header-control-bg: ${headerControlBackground}; --header-control-bg-hover: ${headerControlHoverBackground}; --header-control-bg-active: ${headerControlActiveBackground}; --header-control-border: ${headerControlBorder}; --header-control-border-hover: ${headerControlBorderHover};`;
    const normalizedBackgroundImageUrl = this.normalizeBackgroundImageUrl(this._config.background_image_url);
    const safeBackgroundImageUrl = normalizedBackgroundImageUrl
      ? String(normalizedBackgroundImageUrl).replace(/[\'\\]/g, '\\$&')
      : null;
    const backgroundImageStyle = safeBackgroundImageUrl
      ? `--calendar-background-image: url('${safeBackgroundImageUrl}'); --calendar-background-size: ${this._config.background_image_size}; --calendar-background-position: ${this._config.background_image_position}; --calendar-background-repeat: ${this._config.background_image_repeat};`
      : '';
    const normalizedBackgroundOpacity = this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0);
    const backgroundAlpha = (100 - normalizedBackgroundOpacity) / 100;
    const backgroundImageAlpha = safeBackgroundImageUrl ? (normalizedBackgroundOpacity / 100) : 0;
    const hasCustomBackground = normalizedBackgroundOpacity > 0;
    const backgroundStyle = `--calendar-background-opacity: ${backgroundAlpha}; --calendar-background-image-opacity: ${backgroundImageAlpha};`;
    const containerStyle = `${headerStyle} ${backgroundStyle} ${backgroundImageStyle}`.trim();

    this._root.innerHTML = `
      <style>
        ${this.getStyles()}
      </style>

      ${this._config.uix?.style ? `
        <style class="uix-style">
          ${this._config.uix.style}
        </style>
      ` : ''}

      <div class="calendar-container ${this._isDarkMode ? 'dark-mode' : ''} ${hasCustomBackground ? 'custom-background' : ''} ${this._sidePanelOpen ? 'has-task-panel' : ''}" style="${containerStyle}">
        ${this._config.compact_header ? this.renderCompactHeader() : this.renderStandardHeader()}

        <div class="calendar-body">
          <div class="calendar-main">
            ${this.renderCalendarView()}
          </div>
          ${this.renderTaskPanel()}
        </div>

        <div class="event-modal" id="event-modal">
          <div class="modal-content" id="modal-content">
          </div>
        </div>
      </div>

      ${this.renderAddTypeMenu()}
      ${this.renderDayCreatePicker()}
    `;

    this.attachEventListeners();
    this.updateCompactHeaderWrapState();
    this.updateCalendarBadgesScrollState();
    this.updateWeekStandardFixedOffsetHeightFromDom();
    this.updateMonthContainerTopInViewportFromDom();
    this.updateAgendaContainerTopInViewportFromDom();
    if (this._viewMode === 'agenda') {
      window.requestAnimationFrame(() => {
        this.updateAgendaVisibleDateRangeFromDom();
      });
    }
  }

  renderStandardHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0;
    const shouldShowControls = !this._config.hide_controls;
    const hasTaskSource = this._config.task_source && this._config.task_source !== 'none';

    return `
      <div class="header">
        <div class="header-left">
          <h2 class="header-title">${this._config.title}</h2>
        </div>
        ${shouldShowControls ? `
          <div class="header-controls">
            ${canAddEvents ? `
              <div class="add-event-wrapper">
                <button class="add-event-button" id="add-event-btn"><span class="icon">+</span>${this.t('addEvent')}</button>
              </div>` : ''}
            ${hasTaskSource && this._config.show_task_panel ? `<button class="backlog-toggle-button${this._sidePanelOpen ? ' active' : ''}" id="backlog-toggle-btn">≡ ${this.t('openBacklog')}</button>` : ''}
            ${this.renderThemeToggle()}
            <div class="period-controls">
              <button class="nav-button" id="prev-period">‹</button>
              <div class="month-year">${this.getPeriodLabel()}</div>
              <button class="nav-button" id="next-period">›</button>
              <button class="today-button" id="today">${this.t('today')}</button>
            </div>
            ${this.renderViewModeButtons()}
          </div>
        ` : ''}
      </div>
    `;
  }

  renderCompactHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0;
    const shouldShowCalendars = !this._config.hide_calendars;
    const shouldShowControls = !this._config.hide_controls;
    const hasTaskSource = this._config.task_source && this._config.task_source !== 'none';

    return `
      <div class="header header-compact">
        <div class="compact-header-left">
          <h2 class="header-title">${this._config.title}</h2>
          ${shouldShowCalendars ? this.renderCalendarBadgesInline() : ''}
        </div>
        ${shouldShowControls ? `
          <div class="header-controls compact-header-controls">
            ${canAddEvents ? `
              <div class="add-event-wrapper">
                <button class="compact-add-event-button" id="add-event-btn"><span class="icon">+</span>${this.t('addEvent')}</button>
              </div>` : ''}
            ${hasTaskSource && this._config.show_task_panel ? `<button class="backlog-toggle-button${this._sidePanelOpen ? ' active' : ''}" id="backlog-toggle-btn">≡ ${this.t('openBacklog')}</button>` : ''}
            ${this.renderThemeToggle()}
            <div class="compact-period-controls">
              <button class="nav-button" id="prev-period">‹</button>
              <div class="month-year">${this.getPeriodLabel()}</div>
              <button class="nav-button" id="next-period">›</button>
              <button class="today-button" id="today">${this.t('today')}</button>
            </div>
            ${this.renderViewModeButtons()}
          </div>
        ` : ''}
      </div>
    `;
  }

  renderCalendarBadgesInline() {
    if (!this._config.entities || this._config.entities.length === 0) return '';

    return `
      <div class="calendar-badges-inline">
        ${this._config.entities.map((entityId, index) => {
          const name = this.getCalendarName(entityId);
          const color = this.normalizeSingleColor(this._config.colors[entityId] || this.getDefaultColor(index));
          const isHidden = this._hiddenCalendars.has(entityId);

          const badgeBackground = isHidden ? '#f3f4f6' : this.lightenColor(color, 0.85);
          const badgeTextColor = isHidden ? '#9ca3af' : this.getContractColor(badgeBackground);

          return `
            <div class="calendar-badge calendar-badge-inline ${isHidden ? 'calendar-badge-hidden' : ''}"
                 data-entity="${entityId}"
                 style="background: ${badgeBackground};
                        border-color: ${isHidden ? '#d1d5db' : color};">
              ${this.renderCalendarBadgeIcon(entityId, name, color, isHidden)}
              <span class="calendar-badge-name" style="color: ${badgeTextColor}">${this.escapeHtml(name)}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderViewModeButtons() {
    return `
      <div class="view-mode-buttons">
        <select class="view-mode-select" id="view-mode-select" aria-label="Select calendar view">
          <option value="month" ${this._viewMode === 'month' ? 'selected' : ''}>${this.t('month')}</option>
          <option value="week-compact" ${this._viewMode === 'week-compact' ? 'selected' : ''}>${this.t('week')}</option>
          <option value="week-standard" ${this._viewMode === 'week-standard' ? 'selected' : ''}>${this.t('schedule')}</option>
          <option value="agenda" ${this._viewMode === 'agenda' ? 'selected' : ''}>${this.t('agenda')}</option>
        </select>
      </div>
    `;
  }

  renderThemeToggle() {
    if (this._config.hide_dark_mode_toggle) return '';
    return `<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">${this._isDarkMode ? '☀︎' : '☾'}</button>`;
  }

  getPeriodLabel() {
    if (this._viewMode === 'month') {
      // If rolling_weeks mode is active, show date range
      if (this._config.rolling_weeks !== null) {
        const anchorDate = new Date(this._currentDate);
        anchorDate.setHours(0, 0, 0, 0);

        const currentDay = anchorDate.getDay();
        const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;
        const weekStart = new Date(anchorDate);
        weekStart.setDate(anchorDate.getDate() - diff);

        const totalWeeks = this._config.rolling_weeks + 1;
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + (totalWeeks * 7) - 1);

        return this.formatPeriodDateRange(weekStart, weekEnd);
      }

      // Standard month view
      const month = this._currentDate.getMonth();
      const year = this._currentDate.getFullYear();
      return `${this.getMonthName(month)} ${year}`;
    } else if (this._viewMode === 'agenda') {
      this.ensureAgendaWindowInitialized();
      const rangeStart = this._agendaVisibleStartDate || this._agendaStartDate;
      const rangeEnd = this._agendaVisibleEndDate || this._agendaEndDate;
      return this.formatPeriodDateRange(rangeStart, rangeEnd);
    } else {
      const weekDays = this.getWeekDays();
      if (weekDays.length === 0) return '';
      const start = weekDays[0];
      const end = weekDays[weekDays.length - 1];
      return this.formatPeriodDateRange(start, end);
    }
  }

  formatPeriodDateRange(startDate, endDate) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    if (typeof formatter.formatRange === 'function') {
      return formatter.formatRange(startDate, endDate);
    }

    if (startDate.getTime() === endDate.getTime()) {
      return formatter.format(startDate);
    }

    return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
  }

  renderCalendarView() {
    const shouldShowHeaderBadges = !this._config.compact_header && !this._config.hide_calendars;

    if (this._viewMode === 'month') {
      const showAllEventsMonth = !!this._config.show_all_events_month;
      const isCompactMonth = this._config.compact_height && !showAllEventsMonth;
      const compactMaxHeight = isCompactMonth ? this.getCompactMaxHeight(this._monthContainerTopInViewport) : null;
      const monthWeekRows = this.getMonthWeekRowCount();
      const monthStyle = compactMaxHeight
        ? `height: ${compactMaxHeight}px; overflow-y: auto; grid-template-rows: auto repeat(${monthWeekRows}, minmax(0, 1fr));`
        : '';
      const monthClass = isCompactMonth ? 'calendar-grid compact-month' : 'calendar-grid';

      return `
        ${shouldShowHeaderBadges ? this.renderCalendarBadges() : ''}
        <div class="${monthClass}" style="${monthStyle}">
          ${this.renderDayHeaders()}
          ${this.renderDays()}
        </div>
      `;
    } else if (this._viewMode === 'week-compact') {
      return this.renderWeekCompact();
    } else if (this._viewMode === 'week-standard') {
      return this.renderWeekStandard();
    } else if (this._viewMode === 'agenda') {
      return this.renderAgenda();
    }
  }

  renderDayHeaders() {
    const days = this.getWeekdayNames('short');
    const firstDay = this._config.firstDayOfWeek;
    const orderedDays = [...days.slice(firstDay), ...days.slice(0, firstDay)];

    return orderedDays.map(day => `
      <div class="day-header">${day}</div>
    `).join('');
  }

  renderWeekCompact() {
    const weekDays = this.getWeekDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayNames = this.getWeekdayNames('short');

    return `
      ${!this._config.compact_header && !this._config.hide_calendars ? this.renderCalendarBadges() : ''}
      <div class="week-compact-container">
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const events = this.sortEventsForDate(this.getEventsForDay(date), date);

          return `
            <div class="week-day-column ${isToday ? 'today' : ''}" data-date="${date.toISOString()}" data-click-target="day-header">
              <div class="week-day-header">
                <div class="week-day-name">${dayNames[date.getDay()]}</div>
                <div class="week-day-date">${date.getDate()}</div>
              </div>
              <div class="week-day-events">
                ${events.map(event => {
                  const daySegment = this.getEventDaySegment(event, date);
                  if (!daySegment) return '';
                  const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
                  const timeLabel = isAllDaySegment
                    ? this.t('allDay')
                    : `${this.formatTime(segmentStart)} - ${this.formatTime(segmentEnd)}`;
                  const eventStyle = this.getEventStyle(event);

                  return `
                    <div class="week-compact-event" style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-location-font-size: ${this.getEventLocationFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                      <div class="week-compact-event-time">${timeLabel}</div>
                      <div class="week-compact-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
                      ${this.shouldShowEventLocation(event) ? `<div class="week-compact-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
                    </div>
                  `;
                }).join('')}
                ${events.length === 0 ? `<div style="color: #9ca3af; font-size: 13px; text-align: center; margin-top: 20px;">${this.t('noEvents')}</div>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderWeekStandard() {
    const weekDays = this.getWeekDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { startHour, endHour } = this.getScheduleHourRangeForWeek(weekDays);
    const hours = [];

    for (let h = startHour; h <= endHour; h++) {
      hours.push(h);
    }

    const baseHourHeight = 120;
    const preferredHourHeight = baseHourHeight * (this._config.height_scale || 1.0);

    const dayNames = this.getWeekdayNames('short');

    const allDayLayout = this.buildAllDayLayoutForSchedule(weekDays);
    const maxAllDayEvents = allDayLayout.maxLanes;

    const hasAllDayEvents = maxAllDayEvents > 0;
    const allDayHeight = hasAllDayEvents
      ? 16 + (maxAllDayEvents * 24) + ((maxAllDayEvents - 1) * 4) + 2
      : 28; // Always keep a minimal all-day zone so it remains a drag target

    const compactMaxHeight = this.getCompactMaxHeight(this._weekStandardContainerTopInViewport);
    const fallbackOffsetHeight = 127 + allDayHeight;
    const staticOffsetHeight = this._weekStandardFixedOffsetHeight || fallbackOffsetHeight;
    const availableSlotHeight = compactMaxHeight ? compactMaxHeight - staticOffsetHeight : null;
    const compactHourHeight = availableSlotHeight && availableSlotHeight > 0 ? Math.floor(availableSlotHeight / hours.length) : null;
    const hourHeight = compactHourHeight ? Math.max(20, Math.min(preferredHourHeight, compactHourHeight)) : preferredHourHeight;
    const timelineHeight = hourHeight * hours.length;
    const dayTimeSlotsStyle = `height: ${timelineHeight}px; min-height: ${timelineHeight}px;`;
    const containerStyle = this.getCompactContainerStyle(compactMaxHeight);

    const showCurrentTimeBar = this._config.show_current_time_bar && this.shouldShowCurrentTimeBar(today, startHour, endHour);

    return `
      ${!this._config.compact_header && !this._config.hide_calendars ? this.renderCalendarBadges() : ''}
      <div class="week-standard-container ${this._config.compact_width ? 'compact-width' : ''}" style="${containerStyle}">
        <!-- Time column -->
        <div class="time-column">
          <div class="time-column-header-spacer"></div>
          <div class="time-column-allday-spacer" style="height: ${allDayHeight}px;"></div>
          <div class="time-column-extra-spacer"></div>
          ${hours.map(hour => `
            <div class="time-slot" style="height: ${hourHeight}px;">
              <span class="time-slot-label">${this.formatScheduleHour(hour)}</span>
            </div>
          `).join('')}
        </div>

        <!-- Day columns -->
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const dayEvents = this.getEventsForDay(date);
          const dateKey = this.getDateKey(date);
          const allDayLanes = allDayLayout.dayLanesByDateKey.get(dateKey) || [];

          return `
            <div class="week-standard-day-column ${isToday ? 'today' : ''}" data-date="${date.toISOString()}">
              <div class="week-standard-day-header" data-click-target="day-header">
                <div class="week-standard-day-name">${dayNames[date.getDay()]}</div>
                <div class="week-standard-day-date">${date.getDate()}</div>
              </div>
              ${this.renderAllDayEventsForDay(allDayLanes, allDayHeight)}
              <div class="day-time-slots" style="${dayTimeSlotsStyle}">
                ${hours.map(hour => `
                  <div class="day-time-slot" style="height: ${hourHeight}px;" data-hour="${hour}"></div>
                `).join('')}
                ${showCurrentTimeBar && isToday ? this.renderCurrentTimeLine(startHour, hourHeight) : ''}
                ${this.renderTimedEventsForDay(dayEvents, date, startHour, endHour, hourHeight)}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderAgenda() {
    this.ensureAgendaWindowInitialized();
    const agendaDays = this.getAgendaDays();
    const agendaEventMinHeight = this.getAgendaEventMinHeight();
    const compactMaxHeight = this.getCompactMaxHeight(this._agendaContainerTopInViewport);
    const containerStyle = this.getCompactContainerStyle(compactMaxHeight);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayNames = this.getWeekdayNames('short');
    const monthFormatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'long', year: 'numeric' });
    const agendaRows = [];

    agendaDays.forEach((date, index) => {
      if (index > 0) {
        const previousDate = agendaDays[index - 1];
        const monthChanged = previousDate.getMonth() !== date.getMonth() || previousDate.getFullYear() !== date.getFullYear();
        if (monthChanged) {
          agendaRows.push(`<div class="agenda-month-banner">${this.escapeHtml(monthFormatter.format(date))}</div>`);
        }
      }

      const isToday = date.toDateString() === today.toDateString();
      const events = this.sortEventsForDate(this.getEventsForDay(date), date);
      agendaRows.push(`
        <div class="agenda-day-row ${isToday ? 'today' : ''}" data-date="${date.toISOString()}">
          <div class="agenda-day-label">
            <div class="agenda-day-weekday">${dayNames[date.getDay()]}</div>
            <div class="agenda-day-date">${date.getDate()}</div>
          </div>
          <div class="agenda-day-events">
            ${events.map(event => {
              const daySegment = this.getEventDaySegment(event, date);
              if (!daySegment) return '';
              const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
              const timeLabel = isAllDaySegment
                ? this.t('allDay')
                : `${this.formatTime(segmentStart)} - ${this.formatTime(segmentEnd)}`;
              const eventStyle = this.getEventStyle(event);

              return `
                <div class="agenda-event" style="${eventStyle} --agenda-event-min-height: ${agendaEventMinHeight}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-location-font-size: ${this.getEventLocationFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                  ${this.shouldShowEventTime(event) ? `<div class="agenda-event-time">${timeLabel}</div>` : ''}
                  <div class="agenda-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
                  ${this.shouldShowEventLocation(event) ? `<div class="agenda-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
                  ${this.renderEventIcon(event)}
                </div>
              `;
            }).join('')}
            ${events.length === 0 ? `<div class="agenda-empty-day">${this.t('noEvents')}</div>` : ''}
          </div>
        </div>
      `);
    });

    return `
      ${!this._config.compact_header && !this._config.hide_calendars ? this.renderCalendarBadges() : ''}
      <div class="agenda-container" id="agenda-container" style="${containerStyle}">
        ${agendaRows.join('')}
      </div>
    `;
  }

  getScheduleHourRangeForWeek(weekDays) {
    const configuredStartHour = Number.isFinite(Number(this._config.week_start_hour))
      ? Math.min(23, Math.max(0, Number(this._config.week_start_hour)))
      : 0;
    const configuredEndHour = Number.isFinite(Number(this._config.week_end_hour))
      ? Math.min(23, Math.max(0, Number(this._config.week_end_hour)))
      : 23;

    if (this._config.lock_schedule_hours) {
      const normalizedEndHour = Math.max(configuredStartHour, configuredEndHour);
      return { startHour: configuredStartHour, endHour: normalizedEndHour };
    }

    let dynamicStartHour = configuredStartHour;
    let dynamicEndHour = configuredEndHour;

    weekDays.forEach((date) => {
      this.getEventsForDay(date).forEach((event) => {
        if (this._hiddenCalendars.has(event.entityId)) {
          return;
        }

        const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
        if (!daySegment || daySegment.isAllDaySegment) {
          return;
        }

        const startHourFloat = this.getLocalDayHourFloat(daySegment.segmentStart, date);
        const endHourFloat = this.getLocalDayHourFloat(daySegment.segmentEnd, date);

        if (Number.isFinite(startHourFloat)) {
          dynamicStartHour = Math.min(dynamicStartHour, Math.floor(startHourFloat));
        }
        if (Number.isFinite(endHourFloat)) {
          dynamicEndHour = Math.max(dynamicEndHour, Math.floor(endHourFloat));
        }
      });
    });

    const normalizedStartHour = Math.min(23, Math.max(0, dynamicStartHour));
    const normalizedEndHour = Math.max(normalizedStartHour, Math.min(23, Math.max(0, dynamicEndHour)));

    return { startHour: normalizedStartHour, endHour: normalizedEndHour };
  }

  buildAllDayLayoutForSchedule(weekDays) {
    const allDaySpans = [];
    const eventSpanMap = new Map();

    weekDays.forEach((date, dayIndex) => {
      this.getEventsForDay(date).forEach(event => {
        if (this._hiddenCalendars.has(event.entityId)) {
          return;
        }

        const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
        if (!daySegment || !daySegment.isAllDaySegment) {
          return;
        }

        const eventKey = this.getScheduleAllDayEventKey(event);
        let span = eventSpanMap.get(eventKey);
        if (!span) {
          span = {
            event,
            displayTitle: daySegment.displayTitle,
            startIndex: dayIndex,
            endIndex: dayIndex,
            startsOnDayAtStartIndex: daySegment.startsOnDay,
            endsOnDayAtEndIndex: daySegment.endsOnDay
          };
          eventSpanMap.set(eventKey, span);
          allDaySpans.push(span);
        } else {
          if (dayIndex < span.startIndex) {
            span.startIndex = dayIndex;
            span.startsOnDayAtStartIndex = daySegment.startsOnDay;
          }
          if (dayIndex > span.endIndex) {
            span.endIndex = dayIndex;
            span.endsOnDayAtEndIndex = daySegment.endsOnDay;
          }
        }

        if (dayIndex === span.startIndex) {
          span.startsOnDayAtStartIndex = daySegment.startsOnDay;
        }
        if (dayIndex === span.endIndex) {
          span.endsOnDayAtEndIndex = daySegment.endsOnDay;
        }
      });
    });

    allDaySpans.sort((a, b) => {
      if (a.startIndex !== b.startIndex) {
        return a.startIndex - b.startIndex;
      }
      const aDuration = a.endIndex - a.startIndex;
      const bDuration = b.endIndex - b.startIndex;
      if (aDuration !== bDuration) {
        return bDuration - aDuration;
      }
      return (a.event.summary || '').localeCompare(b.event.summary || '');
    });

    const laneEndIndexes = [];
    allDaySpans.forEach(span => {
      let laneIndex = laneEndIndexes.findIndex(endIndex => endIndex < span.startIndex);
      if (laneIndex === -1) {
        laneIndex = laneEndIndexes.length;
        laneEndIndexes.push(span.endIndex);
      } else {
        laneEndIndexes[laneIndex] = span.endIndex;
      }
      span.laneIndex = laneIndex;
    });

    const maxLanes = laneEndIndexes.length;
    const dayLanesByDateKey = new Map();
    weekDays.forEach((date, dayIndex) => {
      const lanes = new Array(maxLanes).fill(null);
      allDaySpans.forEach(span => {
        if (dayIndex < span.startIndex || dayIndex > span.endIndex) {
          return;
        }

        lanes[span.laneIndex] = {
          event: span.event,
          displayTitle: span.displayTitle,
          continuesFromPreviousDay: dayIndex > span.startIndex || !span.startsOnDayAtStartIndex,
          continuesToNextDay: dayIndex < span.endIndex || !span.endsOnDayAtEndIndex,
          bridgeFromPreviousDay: dayIndex > span.startIndex,
          bridgeToNextDay: dayIndex < span.endIndex,
          showTitle: dayIndex === span.startIndex,
          visibleDaySpan: span.endIndex - span.startIndex + 1
        };
      });

      dayLanesByDateKey.set(this.getDateKey(date), lanes);
    });

    return { maxLanes, dayLanesByDateKey };
  }

  getScheduleAllDayEventKey(event) {
    const uid = event.uid || event.id;
    if (uid) {
      return `${uid}|${event.start?.date || event.start?.dateTime || event.start}|${event.end?.date || event.end?.dateTime || event.end}`;
    }

    return `${event.entityId || 'unknown'}|${event.summary || ''}|${event.start?.date || event.start?.dateTime || event.start}|${event.end?.date || event.end?.dateTime || event.end}`;
  }

  getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  renderCalendarBadges() {
    if (!this._config.entities || this._config.entities.length === 0) return '';

    return `
      <div class="calendar-badges-container">
        <div class="calendar-badges">
          ${this._config.entities.map((entityId, index) => {
            const name = this.getCalendarName(entityId);
            const color = this.normalizeSingleColor(this._config.colors[entityId] || this.getDefaultColor(index));
            const isHidden = this._hiddenCalendars.has(entityId);

            const badgeBackground = isHidden ? '#f3f4f6' : this.lightenColor(color, 0.85);
            const badgeTextColor = isHidden ? '#9ca3af' : this.getContractColor(badgeBackground);

            return `
              <div class="calendar-badge ${isHidden ? 'calendar-badge-hidden' : ''}"
                   data-entity="${entityId}"
                   style="background: ${badgeBackground};
                          border-color: ${isHidden ? '#d1d5db' : color};
                          cursor: pointer;">
                ${this.renderCalendarBadgeIcon(entityId, name, color, isHidden)}
                <span class="calendar-badge-name" style="color: ${badgeTextColor}">${this.escapeHtml(name)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  renderAllDayEventsForDay(allDayLanes, allDayHeight) {
    return `
      <div class="all-day-events" style="min-height: ${allDayHeight}px; height: ${allDayHeight}px;">
        ${allDayLanes.length > 0 ? allDayLanes.map(lane => {
          if (!lane) {
            return '<div class="all-day-event-spacer"></div>';
          }

          const {
            event,
            continuesFromPreviousDay,
            continuesToNextDay,
            bridgeFromPreviousDay,
            bridgeToNextDay,
            showTitle,
            displayTitle,
            visibleDaySpan
          } = lane;
          const eventStyle = this.getEventStyle(event, { withBorderAccent: false });
          return `
            <div class="all-day-event ${continuesFromPreviousDay ? 'continues-prev' : ''} ${continuesToNextDay ? 'continues-next' : ''} ${bridgeFromPreviousDay ? 'bridge-prev' : ''} ${bridgeToNextDay ? 'bridge-next' : ''} ${showTitle && visibleDaySpan > 1 ? 'leading-span-title' : ''}"
                 style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)}; --all-day-title-span-days: ${visibleDaySpan}; --all-day-title-gap-count: ${Math.max(visibleDaySpan - 1, 0)};"
                 data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="all-day-event-title ${showTitle && visibleDaySpan > 1 ? 'spans-multiple-days' : ''}">${showTitle ? this.escapeHtml(displayTitle || event.summary || this.t('untitledEvent')) : ''}</div>
            </div>
          `;
        }).join('') : ''}
      </div>
    `;
  }

  renderTimedEventsForDay(events, date, startHour, endHour, hourHeight) {
    const timedEvents = events.map(event => {
      const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
      if (!daySegment || daySegment.isAllDaySegment) {
        return null;
      }
      return { event, daySegment };
    }).filter(Boolean);

    // Process timed events for overlaps
    const eventBlocks = timedEvents.map(({ event, daySegment }) => {
      const { segmentStart, segmentEnd } = daySegment;
      const startHourFloat = this.getLocalDayHourFloat(segmentStart, date);
      const endHourFloat = this.getLocalDayHourFloat(segmentEnd, date);

      return {
        event,
        displayTitle: daySegment.displayTitle,
        eventStart: segmentStart,
        eventEnd: segmentEnd,
        startHourFloat,
        endHourFloat,
        startMinutes: Math.round(startHourFloat * 60),
        endMinutes: Math.round(endHourFloat * 60)
      };
    }).filter(block => block.endHourFloat > startHour && block.startHourFloat < (endHour + 1));

    // Sort by start time, then by duration (longer first)
    eventBlocks.sort((a, b) => {
      if (a.startMinutes !== b.startMinutes) {
        return a.startMinutes - b.startMinutes;
      }
      return (b.endMinutes - b.startMinutes) - (a.endMinutes - a.startMinutes);
    });

    const overlaps = (first, second) =>
      first.startMinutes < second.endMinutes && first.endMinutes > second.startMinutes;

    const clusters = [];
    eventBlocks.forEach(block => {
      const matchingClusters = [];
      clusters.forEach((cluster, index) => {
        if (cluster.some(other => overlaps(block, other))) {
          matchingClusters.push(index);
        }
      });

      if (matchingClusters.length === 0) {
        clusters.push([block]);
        return;
      }

      const targetIndex = matchingClusters.shift();
      clusters[targetIndex].push(block);

      matchingClusters.reverse().forEach(index => {
        clusters[targetIndex].push(...clusters[index]);
        clusters.splice(index, 1);
      });
    });

    clusters.forEach(cluster => {
      const columns = [];
      cluster.forEach(block => {
        let placed = false;
        for (const col of columns) {
          const hasOverlap = col.some(other => overlaps(block, other));
          if (!hasOverlap) {
            col.push(block);
            block.column = columns.indexOf(col);
            placed = true;
            break;
          }
        }

        if (!placed) {
          columns.push([block]);
          block.column = columns.length - 1;
        }
      });

      const clusterColumns = columns.length;
      cluster.forEach(block => {
        block.clusterColumns = clusterColumns;
      });
    });

    // Render timed events
    return eventBlocks.map(block => {
      const { event, displayTitle, eventStart, eventEnd, startHourFloat, endHourFloat, column } = block;

      const clampedStartHour = Math.max(startHourFloat, startHour);
      const clampedEndHour = Math.min(endHourFloat, endHour + 1);
      if (clampedEndHour <= clampedStartHour) {
        return '';
      }

      const duration = clampedEndHour - clampedStartHour;
      const top = (clampedStartHour - startHour) * hourHeight;
      const height = duration * hourHeight;

      const clusterColumns = block.clusterColumns || 1;
      // Calculate width and position for concurrent events
      const width = clusterColumns > 1 ? `calc((100% - 16px) / ${clusterColumns})` : 'calc(100% - 16px)';
      const left = clusterColumns > 1 ? `calc(8px + ((100% - 16px) / ${clusterColumns}) * ${column})` : '8px';

      const eventStyle = this.getEventStyle(event, { withBorderAccent: true });

      return `
        <div class="week-standard-event"
             style="top: ${top}px; height: ${height}px; width: ${width}; left: ${left}; ${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-location-font-size: ${this.getEventLocationFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};"
             data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
          <div class="week-standard-event-title">${this.escapeHtml(displayTitle || event.summary || this.t('untitledEvent'))}</div>
          ${this.shouldShowEventTime(event) ? `<div class="week-standard-event-time">${this.formatScheduleTime(eventStart)} - ${this.formatScheduleTime(eventEnd)}</div>` : ''}
          ${this.shouldShowEventLocation(event) ? `<div class="week-standard-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
          ${this.renderEventIcon(event)}
        </div>
      `;
    }).join('');
  }

  getLocalDayHourFloat(dateTime, referenceDate) {
    // Use wall-clock hour values relative to the rendered day so DST transitions
    // do not visually shift events by ±1 hour in the schedule grid.
    const dayKey = Date.UTC(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate());
    const timeKey = Date.UTC(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate());
    const dayDiff = (timeKey - dayKey) / 86400000;

    return (dayDiff * 24) +
      dateTime.getHours() +
      (dateTime.getMinutes() / 60) +
      (dateTime.getSeconds() / 3600) +
      (dateTime.getMilliseconds() / 3600000);
  }

  getVisibleCalendarBadgesForEvent(event) {
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
      return event.sourceCalendars.filter(calendar => !this._hiddenCalendars.has(calendar.entityId));
    }

    return [{ entityId: event.entityId, color: event.color }];
  }

  renderEventIcon(event) {
    if (this._config.event_calendar_friendly_name) {
      const visibleBadges = this.getVisibleCalendarBadgesForEvent(event);
      if (visibleBadges.length === 0) {
        return '';
      }

      const namesHtml = visibleBadges
        .map(calendar => `<div class="week-standard-event-calendar-name">${this.escapeHtml(this.getCalendarName(calendar.entityId))}</div>`)
        .join('');

      return `<div class="week-standard-event-icons">${namesHtml}</div>`;
    }

    if (this._config.hide_event_calendar_bubble) {
      return '';
    }

    const visibleBadges = this.getVisibleCalendarBadgesForEvent(event);
    if (visibleBadges.length === 0) {
      return '';
    }

    const badgesHtml = visibleBadges.map(calendar => {
      const name = this.getCalendarName(calendar.entityId);
      const initial = name.charAt(0).toUpperCase();
      return `<div class="week-standard-event-icon" style="background: ${calendar.color}; color: white;">${initial}</div>`;
    }).join('');

    return `<div class="week-standard-event-icons">${badgesHtml}</div>`;
  }


  lightenColor(color, amount) {
    const rgb = this.colorToRgb(color);
    if (!rgb) {
      return this.normalizeSingleColor(color);
    }

    // Lighten by blending with white
    const nr = Math.round(rgb.r + (255 - rgb.r) * amount);
    const ng = Math.round(rgb.g + (255 - rgb.g) * amount);
    const nb = Math.round(rgb.b + (255 - rgb.b) * amount);

    return `rgb(${nr}, ${ng}, ${nb})`;
  }

  getEventBubbleFontSize() {
    const configuredSize = this._config?.event_font_size;
    if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
      return '12px';
    }

    if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
      return `${configuredSize}px`;
    }

    const normalized = String(configuredSize).trim();
    if (!normalized) return '12px';
    return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
  }

  getEventTimeFontSize() {
    const configuredSize = this._config?.event_time_font_size;
    if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
      return '10px';
    }

    if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
      return `${configuredSize}px`;
    }

    const normalized = String(configuredSize).trim();
    if (!normalized) return '10px';
    return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
  }

  getEventLocationFontSize() {
    const configuredSize = this._config?.event_location_font_size;
    if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
      return '10px';
    }

    if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
      return `${configuredSize}px`;
    }

    const normalized = String(configuredSize).trim();
    if (!normalized) return '10px';
    return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
  }

  shouldShowEventLocation(event) {
    return !!(this._config.show_event_location && event?.location);
  }

  getEventBubbleFontColor(event) {
    if (!event) return 'white';

    const visibleEntityIds = event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)
      ? event.sourceEntityIds.filter(entityId => !this._hiddenCalendars.has(entityId))
      : [event.entityId];

    const preferredEntityId = visibleEntityIds[0] || event.entityId;
    const configuredColor = preferredEntityId
      ? this.normalizeSingleColor(this._config?.event_font_colors?.[preferredEntityId])
      : null;
    if (configuredColor) {
      return configuredColor;
    }

    return this.getContractColor(this.getEventBackgroundColor(event));
  }

  shouldShowEventTime(event) {
    if (!event) return true;

    const visibleEntityIds = event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)
      ? event.sourceEntityIds.filter(entityId => !this._hiddenCalendars.has(entityId))
      : [event.entityId];

    if (visibleEntityIds.length === 0) {
      return false;
    }

    return visibleEntityIds.some(entityId => !this._config.hide_times_for_calendars.includes(entityId));
  }

  shouldShowCurrentTimeBar(today, startHour, endHour) {
    const now = new Date();
    now.setSeconds(0, 0);
    if (now.toDateString() !== today.toDateString()) {
      return false;
    }

    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    return currentHourFloat >= startHour && currentHourFloat <= (endHour + 1);
  }

  renderCurrentTimeLine(startHour, hourHeight) {
    const now = new Date();
    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    const top = (currentHourFloat - startHour) * hourHeight;
    return `<div class="current-time-line" style="top: ${top}px;"></div>`;
  }

  formatScheduleHour(hour) {
    const date = new Date(2020, 0, 1, hour, 0, 0, 0);
    return this.formatScheduleTime(date);
  }

  formatScheduleTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), {
      hour: 'numeric',
      minute: '2-digit',
      hour12: !this._config.use_24hr_schedule
    }).format(date);
  }

  getMonthWeekRowCount() {
    if (this._config.rolling_weeks !== null && this._viewMode === 'month') {
      return this._config.rolling_weeks + 1;
    }

    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = (firstDay - this._config.firstDayOfWeek + 7) % 7;
    return Math.ceil((startDay + daysInMonth) / 7);
  }

  getEventBubbleFontSizePx() {
    const fallbackPx = 11;
    const sizeValue = this.getEventBubbleFontSize();

    if (typeof window === 'undefined' || !this._root) {
      const parsed = parseFloat(sizeValue);
      return Number.isFinite(parsed) ? parsed : fallbackPx;
    }

    const probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.fontSize = sizeValue;
    probe.style.lineHeight = 'normal';
    probe.textContent = 'M';
    this._root.appendChild(probe);

    const computedFontSize = parseFloat(window.getComputedStyle(probe).fontSize);
    probe.remove();

    return Number.isFinite(computedFontSize) ? computedFontSize : fallbackPx;
  }

  getFontSizePx(sizeValue, fallbackPx = 11) {
    if (typeof window === 'undefined' || !this._root) {
      const parsed = parseFloat(sizeValue);
      return Number.isFinite(parsed) ? parsed : fallbackPx;
    }

    const probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.fontSize = sizeValue;
    probe.style.lineHeight = 'normal';
    probe.textContent = 'M';
    this._root.appendChild(probe);

    const computedFontSize = parseFloat(window.getComputedStyle(probe).fontSize);
    probe.remove();

    return Number.isFinite(computedFontSize) ? computedFontSize : fallbackPx;
  }

  getAgendaEventMinHeight() {
    const timeFontPx = this.getFontSizePx(this.getEventTimeFontSize(), 10);
    const titleFontPx = this.getFontSizePx(this.getEventBubbleFontSize(), 12);
    const locationFontPx = this.getFontSizePx(this.getEventLocationFontSize(), 10);

    const timeRowHeight = Math.ceil(timeFontPx * 1.2);
    const titleRowHeight = Math.ceil(titleFontPx * 1.25);
    const locationRowHeight = Math.ceil(locationFontPx * 1.3);

    const verticalPadding = 20; // 10px top + 10px bottom
    const rowSpacing = 8; // time mb + location mt
    const buffer = 8;
    const total = verticalPadding + timeRowHeight + titleRowHeight + locationRowHeight + rowSpacing + buffer;

    return `${Math.max(56, total)}px`;
  }

  getMonthEventRowHeight() {
    const fontSizePx = this.getEventBubbleFontSizePx();
    const lineHeightPx = fontSizePx * 1.2;
    const verticalPaddingPx = 8; // .event has 4px top + 4px bottom padding
    const marginBottomPx = 3; // .event margin-bottom in month view
    return Math.ceil(lineHeightPx + verticalPaddingPx + marginBottomPx);
  }

  renderDays() {
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();

    // If rolling_weeks is set, show current week + N additional weeks
    if (this._config.rolling_weeks !== null && this._viewMode === 'month') {
      return this.renderRollingWeeks();
    }

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const today = new Date();
    const isToday = (d) => {
      return d.getDate() === today.getDate() &&
             d.getMonth() === today.getMonth() &&
             d.getFullYear() === today.getFullYear();
    };

    let html = '';
    const startDay = (firstDay - this._config.firstDayOfWeek + 7) % 7;

    // Previous month days
    for (let i = startDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(year, month - 1, day);
      html += this.renderDay(day, date, true);
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      html += this.renderDay(day, date, false);
    }

    // Next month days
    const totalCells = startDay + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(year, month + 1, day);
      html += this.renderDay(day, date, true);
    }

    return html;
  }

  renderRollingWeeks() {
    const anchorDate = new Date(this._currentDate);
    anchorDate.setHours(0, 0, 0, 0);

    // Find the start of the current week based on firstDayOfWeek
    const currentDay = anchorDate.getDay();
    const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;
    const weekStart = new Date(anchorDate);
    weekStart.setDate(anchorDate.getDate() - diff);

    // Calculate total days to show: (rolling_weeks + 1) * 7 days
    const totalWeeks = this._config.rolling_weeks + 1;
    const totalDays = totalWeeks * 7;

    let html = '';

    // Render all days in the rolling weeks
    for (let i = 0; i < totalDays; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);

      // In rolling-weeks month view, keep trailing (next-month) days visually active
      // while still dimming any leading days from the previous month.
      const currentMonthStart = new Date(this._currentDate.getFullYear(), this._currentDate.getMonth(), 1);
      const isOtherMonth = date < currentMonthStart;

      html += this.renderDay(date.getDate(), date, isOtherMonth);
    }

    return html;
  }

  getMaxVisibleEventsForMonthDay() {
    const defaultMaxVisible = 3;

    if (this._viewMode === 'month' && this._config.show_all_events_month) {
      return Number.MAX_SAFE_INTEGER;
    }

    if (this._viewMode !== 'month' || !this._config.compact_height) {
      return defaultMaxVisible;
    }

    const compactMaxHeight = this.getCompactMaxHeight(this._monthContainerTopInViewport);
    if (!compactMaxHeight) {
      return defaultMaxVisible;
    }

    const weekRows = this.getMonthWeekRowCount();
    if (!weekRows || weekRows < 1) {
      return defaultMaxVisible;
    }

    const gridGap = 1;
    const dayHeaderRowHeight = 41;
    const dayCellVerticalPadding = 16; // .day-cell has 8px top + 8px bottom padding
    const dayNumberBlockHeight = 22; // number text + margin-bottom in compact month cell
    const eventRowHeight = this.getMonthEventRowHeight();

    const contentHeight = compactMaxHeight - dayHeaderRowHeight - (weekRows * gridGap);
    const dayCellHeight = Math.floor(contentHeight / weekRows);
    // Do not pre-reserve space for the "+N more" indicator here. Overflow handling
    // swaps one event row for the indicator in renderDay(), so reserving both causes
    // under-counting and hidden space.
    const usableEventHeight = dayCellHeight - dayCellVerticalPadding - dayNumberBlockHeight;
    if (!Number.isFinite(usableEventHeight) || usableEventHeight <= 0) {
      return 1;
    }

    return Math.max(1, Math.floor(usableEventHeight / eventRowHeight));
  }

  renderDay(dayNum, date, isOtherMonth) {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    let dayEvents = this.getEventsForDay(date);

    dayEvents = this.sortEventsForDate(dayEvents, date);

    const maxVisible = this.getMaxVisibleEventsForMonthDay();
    const hasOverflow = dayEvents.length > maxVisible;
    const visibleEvents = hasOverflow ? Math.max(0, maxVisible - 1) : maxVisible;
    const hiddenEventCount = Math.max(0, dayEvents.length - visibleEvents);

    let classes = 'day-cell';
    if (isOtherMonth) classes += ' other-month';
    if (isToday) classes += ' today';

    return `
      <div class="${classes}" data-date="${date.toISOString()}">
        <div class="day-number">${dayNum}</div>
        ${dayEvents.slice(0, visibleEvents).map(event => this.renderEvent(event, date)).join('')}
        ${hiddenEventCount > 0 ? `<div class="more-events" data-click-target="more-events">${this.t('moreEvents', { count: hiddenEventCount })}</div>` : ''}
      </div>
    `;
  }

  renderEvent(event, date) {
    const daySegment = this.getEventDaySegment(event, date);
    if (!daySegment) return '';
    const { segmentStart, isAllDaySegment } = daySegment;
    const eventStyle = this.getEventStyle(event);

    return `
      <div class="event" style="${eventStyle}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${!isAllDaySegment ? `<span class="event-time">${this.formatTime(segmentStart)}</span>` : ''}
        ${this.escapeHtml(event.summary || this.t('untitledEvent'))}
      </div>
    `;
  }

  normalizeEventTextValue(value) {
    return String(value || '')
      .normalize('NFKC')
      .replace(/\s+/g, ' ')
      .trim();
  }

  getNormalizedEventTimeValue(value) {
    if (!value) return '';

    const toDateTimeTimestamp = (rawValue) => {
      const normalizedRaw = this.normalizeEventTextValue(rawValue);
      if (!normalizedRaw) return null;

      const floatingMatch = normalizedRaw.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.(\d+))?(Z|[+-]\d{2}:\d{2})?$/i);
      if (!floatingMatch) {
        return null;
      }

      const [, yearText, monthText, dayText, hourText, minuteText, secondText, fractionText, tzText] = floatingMatch;
      const year = Number(yearText);
      const month = Number(monthText);
      const day = Number(dayText);
      const hour = Number(hourText);
      const minute = Number(minuteText);
      const second = Number(secondText || '0');
      const millis = Number(((fractionText || '').slice(0, 3)).padEnd(3, '0'));

      const timestamp = tzText
        ? Date.parse(`${yearText}-${monthText}-${dayText}T${hourText}:${minuteText}:${String(second).padStart(2, '0')}.${String(millis).padStart(3, '0')}${tzText.toUpperCase()}`)
        : new Date(year, month - 1, day, hour, minute, second, millis).getTime();

      return Number.isFinite(timestamp) ? timestamp : null;
    };

    if (typeof value === 'object') {
      if (value.dateTime) {
        const parsedTimestamp = toDateTimeTimestamp(value.dateTime);
        if (parsedTimestamp !== null) return `dt:${parsedTimestamp}`;

        const ts = new Date(value.dateTime).getTime();
        return Number.isFinite(ts) ? `dt:${ts}` : `dt:${String(value.dateTime)}`;
      }

      if (value.date) {
        const day = this.normalizeEventTextValue(value.date);
        return `d:${day}`;
      }
    }

    const normalized = this.normalizeEventTextValue(value);
    if (!normalized) return '';

    if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
      return `d:${normalized}`;
    }

    const parsedTimestamp = toDateTimeTimestamp(normalized);
    if (parsedTimestamp !== null) return `dt:${parsedTimestamp}`;

    const ts = new Date(normalized).getTime();
    return Number.isFinite(ts) ? `dt:${ts}` : normalized;
  }

  getEventExactMatchKey(event) {
    const start = this.getNormalizedEventTimeValue(event.start);
    const end = this.getNormalizedEventTimeValue(event.end);
    const summary = this.normalizeEventTextValue(event.summary);
    const location = this.normalizeEventTextValue(event.location);
    return `${start}|${end}|${summary}|${location}`;
  }


  combineDuplicateCalendarEvents(events) {
    if (!this._config.combine_calendars) {
      return events;
    }

    const groupedEvents = new Map();

    events.forEach(event => {
      const key = this.getEventExactMatchKey(event);
      if (!groupedEvents.has(key)) {
        groupedEvents.set(key, {
          baseEvent: event,
          calendars: [{ entityId: event.entityId, color: event.color }],
          sourceEvents: [event]
        });
        return;
      }

      const grouped = groupedEvents.get(key);
      if (!grouped.calendars.some(calendar => calendar.entityId === event.entityId)) {
        grouped.calendars.push({ entityId: event.entityId, color: event.color });
      }
      grouped.sourceEvents.push(event);
    });

    return Array.from(groupedEvents.values()).flatMap(({ baseEvent, calendars, sourceEvents }) => {
      if (calendars.length === 1) {
        return sourceEvents;
      }

      return {
        ...baseEvent,
        isCombinedCalendarEvent: true,
        sourceCalendars: calendars,
        sourceEntityIds: calendars.map(calendar => calendar.entityId),
        sourceEvents,
        entityId: calendars[0].entityId,
        color: calendars[0].color
      };
    });
  }

  getVisibleCalendarColorsForEvent(event) {
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
      return event.sourceCalendars
        .filter(calendar => !this._hiddenCalendars.has(calendar.entityId))
        .map(calendar => calendar.color);
    }

    if (this._hiddenCalendars.has(event.entityId)) {
      return [];
    }

    return [event.color];
  }

  createZebraStripeGradient(colors) {
    if (colors.length === 1) {
      return colors[0];
    }

    const configuredStripeWidth = Number(this._config?.combine_calendars_width);
    const stripeWidthPx = Number.isFinite(configuredStripeWidth) && configuredStripeWidth > 0
      ? configuredStripeWidth
      : 12;
    const cycle = colors.map((color, index) => {
      const start = index * stripeWidthPx;
      const end = start + stripeWidthPx;
      return `${color} ${start}px ${end}px`;
    }).join(', ');

    return `repeating-linear-gradient(135deg, ${cycle})`;
  }

  createVerticalBarsGradient(colors) {
    const segments = colors.map((color, index) => {
      const start = (index / colors.length) * 100;
      const end = ((index + 1) / colors.length) * 100;
      return `${color} ${start}% ${end}%`;
    }).join(', ');
    return `linear-gradient(to bottom, ${segments})`;
  }

  createDotsDecoration(colors, indicatorWidth) {
    const safeWidth = Math.max(1, indicatorWidth);
    const dotRadius = Math.max(2, Math.floor(safeWidth * 0.3));
    const x = safeWidth / 2;
    return colors
      .map((color, index) => {
        const y = (safeWidth / 2) + (index * safeWidth);
        return `radial-gradient(circle at ${x}px ${y}px, ${color} 0 ${dotRadius}px, transparent ${dotRadius + 1}px)`;
      })
      .join(', ');
  }

  getCombinedBackgroundColor(visibleColors, fallbackColor) {
    const primaryColor = visibleColors[0] || fallbackColor;
    const option = this.normalizeCombineBackground(this._config?.combine_background);
    if (option === 'primary') return primaryColor;
    if (option === 'neutral') return '#F8F3E9';
    return option;
  }

  getEventBackgroundColor(event) {
    const visibleColors = this.getVisibleCalendarColorsForEvent(event);
    const primaryColor = visibleColors[0] || event?.color || '#3b82f6';

    if (visibleColors.length <= 1) {
      return primaryColor;
    }

    return this.getCombinedBackgroundColor(visibleColors, primaryColor);
  }

  getContractColor(backgroundColor) {
    const rgb = this.colorToRgb(backgroundColor);
    if (!rgb) return 'white';

    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return luminance > 0.6 ? 'black' : 'white';
  }

  getIndicatorColors(visibleColors, combineStyle, combineBackgroundOption) {
    if ((combineStyle === 'bars' || combineStyle === 'dots') && combineBackgroundOption === 'primary') {
      return visibleColors.slice(1);
    }
    return visibleColors;
  }

  getEventStyle(event, { withBorderAccent = false } = {}) {
    const visibleColors = this.getVisibleCalendarColorsForEvent(event);
    const primaryColor = visibleColors[0] || event.color;

    const shouldShowBorderAccent = withBorderAccent && visibleColors.length <= 1;
    const borderStyle = shouldShowBorderAccent
      ? `border-left: 4px solid ${primaryColor};`
      : 'border-left: none;';

    if (visibleColors.length <= 1) {
      return `background-color: ${primaryColor}; background-image: none; background-clip: padding-box; ${borderStyle}`;
    }

    const combineStyle = this.normalizeCombineStyle(this._config?.combine_style);
    const combineBackgroundOption = this.normalizeCombineBackground(this._config?.combine_background);
    const backgroundColor = this.getCombinedBackgroundColor(visibleColors, primaryColor);
    const indicatorWidth = Number(this._config?.combine_calendars_width) > 0
      ? Number(this._config.combine_calendars_width)
      : 12;
    const indicatorColors = this.getIndicatorColors(visibleColors, combineStyle, combineBackgroundOption);

    if (combineStyle === 'bars') {
      const barsGradient = indicatorColors.length > 0 ? this.createVerticalBarsGradient(indicatorColors) : 'none';
      const leftOffset = indicatorColors.length > 0 ? `--combine-left-offset: ${indicatorWidth}px;` : '--combine-left-offset: 0px;';
      return `${leftOffset} background-color: ${backgroundColor}; background-image: ${barsGradient}; background-size: ${indicatorWidth}px 100%; background-position: left top; background-repeat: no-repeat; background-clip: padding-box; ${borderStyle}`;
    }

    if (combineStyle === 'dots') {
      const dots = indicatorColors.length > 0 ? this.createDotsDecoration(indicatorColors, indicatorWidth) : 'none';
      const leftOffset = indicatorColors.length > 0 ? `--combine-left-offset: ${indicatorWidth}px;` : '--combine-left-offset: 0px;';
      return `${leftOffset} background-color: ${backgroundColor}; background-image: ${dots}; background-repeat: no-repeat; background-clip: padding-box; ${borderStyle}`;
    }

    const stripeGradient = this.createZebraStripeGradient(visibleColors);
    return `--combine-left-offset: 0px; background-color: ${backgroundColor}; background-image: ${stripeGradient}; background-clip: padding-box; ${borderStyle}`;
  }

  getEventDateTimeInfo(event) {
    if (event.start.dateTime) {
      return {
        eventStart: new Date(event.start.dateTime),
        eventEnd: new Date(event.end.dateTime),
        isAllDay: false
      };
    }

    if (event.start.date) {
      return {
        eventStart: this.parseLocalDate(event.start.date),
        eventEnd: this.parseLocalDate(event.end.date),
        isAllDay: true
      };
    }

    const isAllDay = !event.start.includes('T');
    return {
      eventStart: new Date(event.start),
      eventEnd: new Date(event.end),
      isAllDay
    };
  }

  getLocalDateKey(date) {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  }

  eventSpansMultipleLocalDates(eventStart, eventEnd) {
    return this.getLocalDateKey(eventStart) !== this.getLocalDateKey(eventEnd);
  }

  shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd) {
    const durationMs = eventEnd.getTime() - eventStart.getTime();
    return durationMs >= 86400000 && this.eventSpansMultipleLocalDates(eventStart, eventEnd);
  }

  getScheduleVisualInfo(event) {
    const { eventStart, eventEnd, isAllDay } = this.getEventDateTimeInfo(event);
    const rendersAsAllDay = isAllDay || this.shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd);
    const displayTitle = event.summary || this.t('untitledEvent');
    const shouldIncludeStartTime = !isAllDay && rendersAsAllDay && this.shouldShowEventTime(event);

    return {
      eventStart,
      eventEnd,
      isAllDay,
      rendersAsAllDay,
      displayTitle: shouldIncludeStartTime
        ? this.t('eventTitleWithStartTime', {
            title: displayTitle,
            time: this.formatScheduleTime(eventStart)
          })
        : displayTitle
    };
  }

  getEventDaySegment(event, date, options = {}) {
    const scheduleVisualInfo = options.useScheduleVisualTreatment ? this.getScheduleVisualInfo(event) : null;
    const { eventStart, eventEnd, isAllDay } = scheduleVisualInfo || this.getEventDateTimeInfo(event);
    const rendersAsAllDay = scheduleVisualInfo?.rendersAsAllDay || isAllDay;

    const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const nextDayStart = new Date(dayStart);
    nextDayStart.setDate(nextDayStart.getDate() + 1);

    if (eventEnd <= dayStart || eventStart >= nextDayStart) {
      return null;
    }

    const segmentStart = new Date(Math.max(eventStart.getTime(), dayStart.getTime()));
    const segmentEnd = new Date(Math.min(eventEnd.getTime(), nextDayStart.getTime()));
    const isAllDaySegment = rendersAsAllDay || (
      segmentStart.getTime() === dayStart.getTime() &&
      segmentEnd.getTime() === nextDayStart.getTime()
    );

    return {
      eventStart,
      eventEnd,
      segmentStart,
      segmentEnd,
      isAllDay,
      isAllDaySegment,
      startsOnDay: eventStart >= dayStart && eventStart < nextDayStart,
      endsOnDay: eventEnd > dayStart && eventEnd <= nextDayStart,
      displayTitle: scheduleVisualInfo?.displayTitle || event.summary || this.t('untitledEvent'),
      rendersAsAllDay
    };
  }

  sortEventsForDate(events, date) {
    return [...events].sort((a, b) => {
      const aSegment = this.getEventDaySegment(a, date);
      const bSegment = this.getEventDaySegment(b, date);

      if (!aSegment && !bSegment) return 0;
      if (!aSegment) return 1;
      if (!bSegment) return -1;

      if (aSegment.isAllDaySegment && !bSegment.isAllDaySegment) return -1;
      if (!aSegment.isAllDaySegment && bSegment.isAllDaySegment) return 1;

      return aSegment.segmentStart - bSegment.segmentStart;
    });
  }

  getEventsForDay(date) {
    const sourceEvents = this.combineDuplicateCalendarEvents(this._events);

    return sourceEvents.filter(event => {
      if (this.getVisibleCalendarColorsForEvent(event).length === 0) {
        return false;
      }

      return this.getEventDaySegment(event, date) !== null;
    });
  }

  attachEventListeners() {
    const prevButton = this.getRootElementById('prev-period');
    const nextButton = this.getRootElementById('next-period');
    const todayButton = this.getRootElementById('today');
    const addEventButton = this.getRootElementById('add-event-btn');
    const themeToggleButton = this.getRootElementById('theme-toggle');
    const modal = this.getRootElementById('event-modal');
    const agendaContainer = this.getRootElementById('agenda-container');

    // View mode selector
    const viewModeSelect = this.getRootElementById('view-mode-select');
    viewModeSelect?.addEventListener('change', () => {
      this._viewMode = viewModeSelect.value;
      if (this._viewMode === 'agenda') {
        this.resetAgendaWindowToToday();
      } else {
        this.setWeekStart();
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    const calendarBadgesStrip = this._root.querySelector('.calendar-badges');
    if (calendarBadgesStrip) {
      calendarBadgesStrip.addEventListener('scroll', () => this.updateCalendarBadgesScrollState(), { passive: true });
    }

    // Calendar badge toggle (both regular and inline)
    this._root.querySelectorAll('.calendar-badge, .calendar-badge-inline').forEach(badge => {
      badge.addEventListener('click', (e) => {
        const entityId = badge.getAttribute('data-entity');
        if (this._hiddenCalendars.has(entityId)) {
          this._hiddenCalendars.delete(entityId);
        } else {
          this._hiddenCalendars.add(entityId);
        }
        this.persistPreferences();
        this.render();
      });
    });

    // Add event button — opens the add-type dropdown menu
    addEventButton?.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = this.getRootElementById('add-type-menu');
      if (!menu) return;
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
      } else {
        // Use fixed positioning so the menu escapes calendar-container's overflow:hidden
        const rect = addEventButton.getBoundingClientRect();
        menu.style.top = (rect.bottom + 6) + 'px';
        menu.style.left = rect.left + 'px';
        menu.classList.add('open');
      }
    });

    // Add-type menu items
    this._root.querySelectorAll('.add-type-menu-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const type = item.getAttribute('data-add-type');
        this.getRootElementById('add-type-menu')?.classList.remove('open');
        if (type === 'event') {
          this.showCreateEventModal();
        } else if (type === 'task') {
          this.showCreateTaskModal();
        } else if (type === 'meal') {
          this.showCreateMealWeekPlanModal();
        }
      });
    });

    // Backlog panel toggle
    this.getRootElementById('backlog-toggle-btn')?.addEventListener('click', () => {
      this.toggleSidePanel();
    });

    // Day-click create type picker items
    this._root.querySelectorAll('.day-create-picker-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        this.getRootElementById('day-create-picker')?.classList.remove('open');
        const type = item.getAttribute('data-create-type');
        const date = this._dayPickerDate;
        const time = this._dayPickerTime;
        if (type === 'event') {
          this.showCreateEventModal(date, time);
        } else if (type === 'task') {
          this.showCreateTaskModal(date);
        } else if (type === 'meal') {
          this.showCreateMealPlanModal(date);
        }
      });
    });

    // Close add-type menu on outside click — remove previous listener first to prevent accumulation
    if (this._outsideClickHandler) {
      document.removeEventListener('click', this._outsideClickHandler);
    }
    this._outsideClickHandler = (e) => {
      if (!e.target.closest || (!e.target.closest('.add-event-wrapper') && !e.target.closest('#add-type-menu'))) {
        this.getRootElementById('add-type-menu')?.classList.remove('open');
      }
      if (!e.target.closest || !e.target.closest('#day-create-picker')) {
        this.getRootElementById('day-create-picker')?.classList.remove('open');
      }
    };
    document.addEventListener('click', this._outsideClickHandler);

    themeToggleButton?.addEventListener('click', () => {
      this.applyThemeMode(this._isDarkMode ? 'light' : 'dark');
      this.persistPreferences();
      this.render();
    });

    prevButton?.addEventListener('click', () => {
      if (this._viewMode === 'agenda') {
        this.ensureAgendaWindowInitialized();
        const backwardDays = this.getAgendaViewportDayCapacity();
        this._agendaStartDate.setDate(this._agendaStartDate.getDate() - backwardDays);
        this._agendaStartDate.setHours(0, 0, 0, 0);
        this._agendaEndDate.setDate(this._agendaEndDate.getDate() - backwardDays);
        this._agendaEndDate.setHours(23, 59, 59, 999);
      } else if (this._viewMode === 'month') {
        if (this._config.rolling_weeks !== null) {
          // In rolling weeks mode, go back by the number of weeks shown
          const weeksToAdvance = this._config.rolling_weeks + 1;
          this._currentDate.setDate(this._currentDate.getDate() - (weeksToAdvance * 7));
        } else {
          // Standard month navigation
          this._currentDate.setMonth(this._currentDate.getMonth() - 1);
        }
      } else {
        // In rolling-days mode, advance by rolling days + 1, otherwise by 7
        const rollingDays = this.getRollingDaysForView();
        const daysToAdvance = rollingDays !== null
          ? rollingDays + 1
          : 7;
        this._currentDate.setDate(this._currentDate.getDate() - daysToAdvance);
        if (rollingDays === null) {
          this.setWeekStart();
        }
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    nextButton?.addEventListener('click', () => {
      if (this._viewMode === 'agenda') {
        this.ensureAgendaWindowInitialized();
        const dayMs = 24 * 60 * 60 * 1000;
        const windowSpanDays = Math.max(0, Math.round((this._agendaEndDate.getTime() - this._agendaStartDate.getTime()) / dayMs));
        const visibleRange = this.getAgendaVisibleDateRangeFromDom() || (
          this._agendaVisibleStartDate && this._agendaVisibleEndDate
            ? { startDate: this._agendaVisibleStartDate, endDate: this._agendaVisibleEndDate }
            : null
        );
        const targetStart = visibleRange ? new Date(visibleRange.endDate) : new Date(this._agendaStartDate);
        targetStart.setHours(0, 0, 0, 0);

        const targetEnd = new Date(targetStart);
        targetEnd.setDate(targetEnd.getDate() + windowSpanDays);
        targetEnd.setHours(23, 59, 59, 999);

        this._agendaStartDate = targetStart;
        this._agendaEndDate = targetEnd;
      } else if (this._viewMode === 'month') {
        if (this._config.rolling_weeks !== null) {
          // In rolling weeks mode, go forward by the number of weeks shown
          const weeksToAdvance = this._config.rolling_weeks + 1;
          this._currentDate.setDate(this._currentDate.getDate() + (weeksToAdvance * 7));
        } else {
          // Standard month navigation
          this._currentDate.setMonth(this._currentDate.getMonth() + 1);
        }
      } else {
        // In rolling-days mode, advance by rolling days + 1, otherwise by 7
        const rollingDays = this.getRollingDaysForView();
        const daysToAdvance = rollingDays !== null
          ? rollingDays + 1
          : 7;
        this._currentDate.setDate(this._currentDate.getDate() + daysToAdvance);
        if (rollingDays === null) {
          this.setWeekStart();
        }
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    todayButton?.addEventListener('click', () => {
      if (this._viewMode === 'agenda') {
        this.resetAgendaWindowToToday();
      } else {
        this._currentDate = new Date();
      }
      if (this._viewMode !== 'agenda' && this.getRollingDaysForView() === null) {
        this.setWeekStart();
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    agendaContainer?.addEventListener('scroll', async () => {
      if (this._viewMode !== 'agenda' || this._agendaScrollLoadLock) return;
      this.updateAgendaVisibleDateRangeFromDom();
      const threshold = 80;
      const nearBottom = agendaContainer.scrollTop + agendaContainer.clientHeight >= agendaContainer.scrollHeight - threshold;
      const nearTop = agendaContainer.scrollTop <= threshold;

      if (!nearBottom && !nearTop) return;

      this._agendaScrollLoadLock = true;
      const previousScrollHeight = agendaContainer.scrollHeight;

      if (nearBottom) {
        this._agendaEndDate.setDate(this._agendaEndDate.getDate() + this._agendaDaysPerScrollLoad);
      } else if (nearTop) {
        this._agendaStartDate.setDate(this._agendaStartDate.getDate() - this._agendaDaysPerScrollLoad);
      }

      await this.ensureEventsForCurrentRange({ renderIfCovered: true });

      if (nearTop) {
        const updatedContainer = this.getRootElementById('agenda-container');
        if (updatedContainer) {
          updatedContainer.scrollTop = updatedContainer.scrollHeight - previousScrollHeight + threshold;
        }
      }

      this._agendaScrollLoadLock = false;
    }, { passive: true });

    // Event click handlers for all view modes
    this._root.querySelectorAll('.event, .week-compact-event, .week-standard-event, .all-day-event, .agenda-event').forEach(eventEl => {
      eventEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventData = JSON.parse(eventEl.getAttribute('data-event'));
        this.showEventModal(eventData);
      });
    });

    // +N more click handlers (month view)
    this._root.querySelectorAll('.more-events').forEach(moreEl => {
      moreEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const dayEl = moreEl.closest('.day-cell');
        if (!dayEl) return;

        const date = new Date(dayEl.getAttribute('data-date'));
        const events = this.getEventsForDay(date);

        if (events.length > 0) {
          this.showDayCompactModal(date, events);
        }
      });
    });

    // Day click handlers (month view only)
    this._root.querySelectorAll('.day-cell').forEach(dayEl => {
      dayEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('event') || e.target.closest('.event')) return;

        const date = new Date(dayEl.getAttribute('data-date'));

        if (this._config.enable_event_management && this.getWritableCalendars().length > 0) {
          this._dayPickerDate = date;
          this._dayPickerTime = null;
          this._showCreateTypePicker(e);
        } else {
          const events = this.getEventsForDay(date);
          if (events.length > 0) this.showDayModal(date, events);
        }
      });
    });

    // Time slot click handlers (schedule view)
    this._root.querySelectorAll('.day-time-slot').forEach(slotEl => {
      slotEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) return;

        const column = slotEl.closest('.week-standard-day-column');
        const date = new Date(column.getAttribute('data-date'));
        const hour = parseInt(slotEl.getAttribute('data-hour'));
        date.setHours(hour, 0, 0, 0);

        this._dayPickerDate = new Date(date);
        this._dayPickerTime = new Date(date);
        this._showCreateTypePicker(e);
      });
    });

    // Day header click handlers (week views)
    this._root.querySelectorAll('[data-click-target="day-header"]').forEach(headerEl => {
      headerEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) return;

        const column = headerEl.closest('[data-date]');
        const date = new Date(column.getAttribute('data-date'));

        this._dayPickerDate = date;
        this._dayPickerTime = null;
        this._showCreateTypePicker(e);
      });
    });

    // Modal close
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (this._activeModalBackHandler) {
          const backHandler = this._activeModalBackHandler;
          this._activeModalBackHandler = null;
          backHandler();
        } else {
          modal.classList.remove('show');
        }
      }
    });

    // Initialize drag-and-drop
    this.initDragAndDrop();
  }

  // ============================================================================
  // TASK BACKLOG PANEL
  // ============================================================================

  renderAddTypeMenu() {
    const hasTaskSource = this._config.task_source && this._config.task_source !== 'none';
    const isDark = this._isDarkMode;
    return `
      <div class="add-type-menu${isDark ? ' dark-mode' : ''}" id="add-type-menu">
        <div class="add-type-menu-item" data-add-type="event">📅 ${this.t('addEvent')}</div>
        ${hasTaskSource ? `<div class="add-type-menu-item" data-add-type="task">✅ ${this.t('addTask')}</div>` : ''}
        <div class="add-type-menu-item" data-add-type="meal">🍽 ${this.t('addMealWeekPlan')}</div>
      </div>
    `;
  }

  renderDayCreatePicker() {
    const hasTaskSource = this._config.task_source && this._config.task_source !== 'none';
    const isDark = this._isDarkMode;
    return `
      <div class="day-create-picker${isDark ? ' dark-mode' : ''}" id="day-create-picker">
        <div class="day-create-picker-item" data-create-type="event">📅 ${this.t('addEvent')}</div>
        ${hasTaskSource ? `<div class="day-create-picker-item" data-create-type="task">✅ ${this.t('addTask')}</div>` : ''}
        <div class="day-create-picker-item" data-create-type="meal">🍽 ${this.t('addMealPlan')}</div>
      </div>
    `;
  }

  renderTaskPanel() {
    const hasTaskSource = this._config.task_source && this._config.task_source !== 'none';
    if (!hasTaskSource || !this._config.show_task_panel) return '';
    return `
      <div class="task-panel${this._sidePanelOpen ? ' task-panel-open' : ''}" id="task-panel">
        ${this._buildTaskPanelContent()}
      </div>
    `;
  }

  _buildTaskPanelContent() {
    const allTasks = this._tasks || [];
    const filterBar = this._buildFilterBar(allTasks);

    if (allTasks.length === 0) {
      const msg = this._tasksFetching ? '…' : this.t('noTasks');
      return `
        <div class="task-panel-header">${this.t('taskBacklog')}</div>
        ${filterBar}
        <div class="task-panel-empty">${msg}</div>
      `;
    }

    // Apply active filters
    const f = this._taskFilters;
    const hasFilter = f.contexts.size || f.tags.size || f.projects.size || f.priorities.size;
    const tasks = hasFilter ? allTasks.filter(task => {
      if (f.contexts.size) {
        const tc = Array.isArray(task.contexts) ? task.contexts : (task.context ? [task.context] : []);
        if (!tc.some(v => f.contexts.has(v))) return false;
      }
      if (f.tags.size) {
        const tt = (Array.isArray(task.tags) ? task.tags : []).filter(t => t.toLowerCase() !== 'task');
        if (!tt.some(v => f.tags.has(v))) return false;
      }
      if (f.projects.size) {
        const tp = Array.isArray(task.projects) ? task.projects : (task.project ? [task.project] : []);
        if (!tp.some(v => f.projects.has(v))) return false;
      }
      if (f.priorities.size && !f.priorities.has(task.priority)) return false;
      return true;
    }) : allTasks;

    const l1Field = this._config.backlog_group_l1 || 'contexts';
    const l2Field = this._config.backlog_group_l2 || 'tags';
    const inlineField = this._config.backlog_group_inline || 'projects';
    const groups = this.groupTasksHierarchically(tasks, l1Field, l2Field);
    const esc = s => this.escapeHtml(s);

    const groupsHtml = groups.map(({ l1, subGroups }) => {
      const l1Key = l1;
      const l1Collapsed = this._collapsedGroups.has(l1Key);
      const showL1 = l1Field !== 'none';
      const l1Label = l1 || this.t('uncategorized');

      const l1Heading = showL1
        ? `<div class="task-group-l1" data-group-key="${esc(l1Key)}" data-group-level="1">
            <span class="group-collapse-icon">${l1Collapsed ? '▶' : '▼'}</span>
            ${esc(l1Label)}
          </div>` : '';

      const subHtml = (showL1 && l1Collapsed) ? '' : subGroups.map(({ l2, tasks: groupTasks }) => {
        const l2Key = `${l1Key}\x1F${l2}`;
        const l2Collapsed = this._collapsedGroups.has(l2Key);
        const showL2 = l2Field !== 'none';
        const l2Label = l2 || this.t('uncategorized');

        const l2Heading = showL2
          ? `<div class="task-group-l2" data-group-key="${esc(l2Key)}" data-group-level="2">
              <span class="group-collapse-icon">${l2Collapsed ? '▶' : '▼'}</span>
              ${esc(l2Label)}
            </div>` : '';

        const tasksHtml = (showL2 && l2Collapsed) ? '' : groupTasks.map(t => this._renderTaskItem(t, inlineField)).join('');
        return `<div class="task-subgroup">${l2Heading}${tasksHtml}</div>`;
      }).join('');

      return `<div class="task-group">${l1Heading}${subHtml}</div>`;
    }).join('');
    const bodyHtml = tasks.length === 0
      ? `<div class="task-panel-empty">No tasks match the active filters.</div>`
      : groupsHtml;
    return `<div class="task-panel-header">${this.t('taskBacklog')}</div>${filterBar}${bodyHtml}`;
  }

  _buildFilterBar(allTasks) {
    const contexts = new Set();
    const tags = new Set();
    const projects = new Set();
    const priorities = new Set();
    const PRIORITY_ORDER = ['highest', 'high', 'medium', 'low', 'lowest'];
    const PRIORITY_LABELS = {
      highest: this.t('priorityHighest'), high: this.t('priorityHigh'),
      medium: this.t('priorityMedium'),   low: this.t('priorityLow'),
      lowest: this.t('priorityLowest'),
    };
    allTasks.forEach(task => {
      (Array.isArray(task.contexts) ? task.contexts : (task.context ? [task.context] : [])).forEach(v => v && contexts.add(v));
      (Array.isArray(task.tags) ? task.tags : []).filter(t => t.toLowerCase() !== 'task').forEach(v => v && tags.add(v));
      (Array.isArray(task.projects) ? task.projects : (task.project ? [task.project] : [])).forEach(v => v && projects.add(v));
      if (task.priority) priorities.add(task.priority);
    });

    const hasAny = contexts.size || tags.size || projects.size || priorities.size;
    if (!hasAny) return '';

    const f = this._taskFilters;
    const hasActive = f.contexts.size || f.tags.size || f.projects.size || f.priorities.size;
    const isOpen = this._filterBarOpen;

    // chip(label, type, value, active) — label is display text, value is what goes in data-filter-value
    const chip = (label, type, value, active) =>
      `<button class="task-filter-chip${active ? ' active' : ''}" data-filter-type="${type}" data-filter-value="${this.escapeHtml(value)}">${this.escapeHtml(label)}</button>`;

    const section = (label, values, type, activeSet) => {
      if (!values.size) return '';
      const chips = [...values].sort().map(v => chip(v, type, v, activeSet.has(v))).join('');
      return `<div class="task-filter-section-label">${label}</div><div class="task-filter-chips">${chips}</div>`;
    };

    const prioritySection = (label, values, type, activeSet) => {
      if (!values.size) return '';
      const sorted = [...values].sort((a, b) => PRIORITY_ORDER.indexOf(a) - PRIORITY_ORDER.indexOf(b));
      const chips = sorted.map(v => chip(PRIORITY_LABELS[v] || v, type, v, activeSet.has(v))).join('');
      return `<div class="task-filter-section-label">${label}</div><div class="task-filter-chips">${chips}</div>`;
    };

    const panelHtml = isOpen ? `
      <div class="task-filter-panel">
        ${section('Contexts', contexts, 'contexts', f.contexts)}
        ${section('Tags', tags, 'tags', f.tags)}
        ${section('Projects', projects, 'projects', f.projects)}
        ${prioritySection('Priority', priorities, 'priorities', f.priorities)}
        ${hasActive ? `<button class="task-filter-clear" id="task-filter-clear-all">Clear all</button>` : ''}
      </div>` : '';

    return `
      <div class="task-filter-bar">
        <div class="task-filter-toggle" id="task-filter-toggle">
          <span>${isOpen ? '▾' : '▸'} Filter</span>
          ${hasActive ? '<span class="filter-active-dot"></span>' : ''}
        </div>
        ${panelHtml}
      </div>`;
  }

  // Returns the raw array of values for a field — used for inline label display.
  _getTaskGroupValues(task, field) {
    if (field === 'none') return [''];
    if (field === 'contexts') {
      const arr = Array.isArray(task.contexts) ? task.contexts : (task.context ? [task.context] : []);
      return arr.length ? arr : [''];
    }
    if (field === 'tags') {
      const arr = (Array.isArray(task.tags) ? task.tags : []).filter(t => t.toLowerCase() !== 'task');
      return arr.length ? arr : [''];
    }
    if (field === 'projects') {
      const arr = Array.isArray(task.projects) ? task.projects : (task.project ? [task.project] : []);
      return arr.length ? arr : [''];
    }
    return [''];
  }

  // Returns a single compound label string for a task's grouping field.
  // Multiple values are joined with " / " so the task appears in exactly one bucket.
  _getTaskGroupLabel(task, field) {
    const vals = this._getTaskGroupValues(task, field).filter(v => v);
    return vals.length ? vals.join(' / ') : '';
  }

  _getTaskInlineLabel(task, field) {
    if (!field || field === 'none') return '';
    return this._getTaskGroupValues(task, field).filter(v => v).join(', ');
  }

  groupTasksHierarchically(tasks, l1Field, l2Field) {
    const l1Map = new Map();
    tasks.forEach(task => {
      const l1 = this._getTaskGroupLabel(task, l1Field);
      if (!l1Map.has(l1)) l1Map.set(l1, new Map());
      const l2Map = l1Map.get(l1);
      const l2 = this._getTaskGroupLabel(task, l2Field);
      if (!l2Map.has(l2)) l2Map.set(l2, []);
      l2Map.get(l2).push(task);
    });
    const sortKeys = keys => [...keys].sort((a, b) => {
      if (!a && b) return 1; if (a && !b) return -1; return a.localeCompare(b);
    });
    return sortKeys(l1Map.keys()).map(l1 => {
      const l2Map = l1Map.get(l1);
      return { l1, subGroups: sortKeys(l2Map.keys()).map(l2 => ({ l2, tasks: l2Map.get(l2) })) };
    });
  }

  _renderTaskItem(task, inlineField) {
    const pc = task.priority ? ` task-item-priority-${task.priority}` : '';
    const isExpanded = this._expandedTaskId === task.id;
    const safeTask = JSON.stringify(task).replace(/'/g, '&#39;');
    const inlineLabel = this._getTaskInlineLabel(task, inlineField);
    const inlinePart = inlineLabel
      ? `<span class="task-item-inline">${this.escapeHtml(inlineLabel)}</span>` : '';
    return `
      <div class="task-item-wrap${isExpanded ? ' expanded' : ''}">
        <div class="task-item${pc}" draggable="true" data-task='${safeTask}' data-task-id="${this.escapeHtml(String(task.id))}" title="${this.escapeHtml(task.summary)}">
          <span class="task-item-title">${this.escapeHtml(task.summary)}</span>${inlinePart}
        </div>
        ${isExpanded ? this._renderTaskDetailPanel(task) : ''}
      </div>`;
  }

  _renderTaskDetailPanel(task) {
    const esc = s => this.escapeHtml(String(s || ''));
    const isTaskNotes = task.source === 'tasknotes';
    const isObsidian = task.source === 'obsidian';
    const isHA = task.source === 'ha_todo';

    let scheduledDate = '', scheduledTime = '';
    if (task.scheduled) {
      if (/T\d{2}:\d{2}/.test(task.scheduled)) {
        scheduledDate = task.scheduled.substring(0, 10);
        scheduledTime = task.scheduled.substring(11, 16);
      } else {
        scheduledDate = task.scheduled;
      }
    }

    const safeTask = JSON.stringify(task).replace(/'/g, '&#39;');

    const noteRow = `
      <div class="task-detail-field task-detail-field-col">
        <label>Notes</label>
        <textarea id="td-notes" class="task-detail-input task-detail-textarea">${esc(task.notes)}</textarea>
      </div>`;

    const dueRow = `
      <div class="task-detail-field">
        <label>Due</label>
        <input type="date" id="td-due" class="task-detail-input" value="${esc(task.due)}">
      </div>`;

    const startRow = `
      <div class="task-detail-field">
        <label>Start</label>
        <input type="date" id="td-start" class="task-detail-input" value="${esc(task.start)}">
      </div>`;

    const scheduledRow = `
      <div class="task-detail-field">
        <label>Scheduled</label>
        <input type="date" id="td-sched-date" class="task-detail-input" value="${esc(scheduledDate)}">
        <input type="time" id="td-sched-time" class="task-detail-input task-detail-time" value="${esc(scheduledTime)}">
      </div>`;

    const priorityRow = `
      <div class="task-detail-field">
        <label>Priority</label>
        <select id="td-priority" class="task-detail-input">
          <option value="">None</option>
          <option value="high" ${task.priority === 'high' ? 'selected' : ''}>High</option>
          <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Medium</option>
          <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Low</option>
        </select>
      </div>`;

    let fields = '';
    if (isTaskNotes) {
      fields = noteRow + dueRow + startRow + scheduledRow + priorityRow + `
        <div class="task-detail-field">
          <label>Contexts</label>
          <input type="text" id="td-contexts" class="task-detail-input" value="${esc((task.contexts || []).join(', '))}">
        </div>
        <div class="task-detail-field">
          <label>Projects</label>
          <input type="text" id="td-projects" class="task-detail-input" value="${esc((task.projects || []).join(', '))}">
        </div>
        <div class="task-detail-field">
          <label>Tags</label>
          <input type="text" id="td-tags" class="task-detail-input" value="${esc((task.tags || []).join(', '))}">
        </div>`;
    } else if (isObsidian) {
      fields = noteRow + dueRow + startRow + scheduledRow + priorityRow + `
        <div class="task-detail-field">
          <label>Project</label>
          <input type="text" id="td-project" class="task-detail-input" value="${esc(task.project)}">
        </div>
        <div class="task-detail-field">
          <label>Context</label>
          <input type="text" id="td-context" class="task-detail-input" value="${esc(task.context)}">
        </div>`;
    } else if (isHA) {
      fields = noteRow + dueRow;
    }

    return `
      <div class="task-detail-panel" data-task-id="${esc(String(task.id))}">
        ${fields}
        <div class="task-detail-actions">
          <button class="btn btn-secondary task-detail-cancel" data-task-id="${esc(String(task.id))}">Cancel</button>
          <button class="btn btn-primary task-detail-save" data-task-id="${esc(String(task.id))}" data-task='${safeTask}'>Save</button>
        </div>
      </div>`;
  }

  toggleSidePanel() {
    this._sidePanelOpen = !this._sidePanelOpen;
    const panel = this.getRootElementById('task-panel');
    const btn = this.getRootElementById('backlog-toggle-btn');
    const container = this._root?.querySelector('.calendar-container');
    if (panel) panel.classList.toggle('task-panel-open', this._sidePanelOpen);
    if (btn) btn.classList.toggle('active', this._sidePanelOpen);
    if (container) container.classList.toggle('has-task-panel', this._sidePanelOpen);
    if (this._sidePanelOpen && (!this._tasksLastFetch || (Date.now() - this._tasksLastFetch > 60000))) {
      this.fetchTasks();
    }
  }

  // Show a small floating picker near the click point so the user can choose Event / Task / Meal
  _showCreateTypePicker(e) {
    const picker = this.getRootElementById('day-create-picker');
    if (!picker) return;
    e.stopPropagation();
    // Position near cursor, keeping it within the viewport
    const x = Math.min(e.clientX, window.innerWidth - 180);
    const y = Math.min(e.clientY + 4, window.innerHeight - 130);
    picker.style.top = y + 'px';
    picker.style.left = x + 'px';
    picker.classList.add('open');
  }

  // ============================================================================
  // MEAL WEEK PLANNER
  // ============================================================================

  showCreateMealWeekPlanModal() {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    if (!modal || !content) return;
    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) { this.showError(this.t('noWritableCalendars')); return; }

    const fmtDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    // Default to Monday of the current week
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    monday.setHours(0, 0, 0, 0);

    const mealCal = this._config.meal_calendar;
    const defaultCalIdx = Math.max(0, mealCal ? writableCalendars.indexOf(mealCal) : 0);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('mealPlanPlanner')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="meal-week-controls">
          <div class="form-group form-group-inline" style="margin-bottom:0">
            <div class="form-inline-row">
              <label class="form-label">${this.t('calendar')}</label>
              <select class="form-input" id="meal-week-cal">
                ${writableCalendars.map((e, i) => `<option value="${this.escapeHtml(e)}"${i === defaultCalIdx ? ' selected' : ''}>${this.escapeHtml(this.getCalendarName(e))}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="form-group form-group-inline" style="margin-bottom:0">
            <div class="form-inline-row">
              <label class="form-label">${this.t('startDate')}</label>
              <input type="date" class="form-input" id="meal-week-start" value="${fmtDate(monday)}" />
            </div>
          </div>
          <div class="form-group form-group-inline" style="margin-bottom:0">
            <div class="form-inline-row">
              <label class="form-label">${this.t('numDays')}</label>
              <input type="number" class="form-input" id="meal-week-days" value="7" min="1" max="28" style="width:64px" />
            </div>
          </div>
        </div>
        <div class="meal-week-scroll">
          <div id="meal-week-grid">${this._buildMealWeekGrid(monday, 7)}</div>
        </div>
        <div class="form-actions">
          <button class="btn btn-secondary" id="cancel-meal-week-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="submit-meal-week-btn">${this.t('planMeals')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');
    this.getRootElementById('close-modal')?.addEventListener('click', () => modal.classList.remove('show'));
    this.getRootElementById('cancel-meal-week-btn')?.addEventListener('click', () => modal.classList.remove('show'));
    this.getRootElementById('submit-meal-week-btn')?.addEventListener('click', () => this._submitCreateMealWeekPlan());

    const rebuildGrid = () => {
      const startVal = this.getRootElementById('meal-week-start')?.value;
      if (!startVal) return;
      const [y, m, d] = startVal.split('-').map(Number);
      const start = new Date(y, m - 1, d);
      const numDays = Math.max(1, Math.min(28, parseInt(this.getRootElementById('meal-week-days')?.value) || 7));
      const grid = this.getRootElementById('meal-week-grid');
      if (grid) grid.innerHTML = this._buildMealWeekGrid(start, numDays);
    };
    this.getRootElementById('meal-week-start')?.addEventListener('change', rebuildGrid);
    this.getRootElementById('meal-week-days')?.addEventListener('change', rebuildGrid);

    // Enter or ArrowDown moves focus down one row (same meal column); ArrowUp moves up.
    // The grid container survives innerHTML rebuilds so one delegated listener suffices.
    const grid = this.getRootElementById('meal-week-grid');
    const NUM_MEAL_COLS = 4; // Breakfast, Lunch, Dinner, Snack
    grid?.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      if (!e.target.classList.contains('meal-cell-input')) return;
      const inputs = Array.from(grid.querySelectorAll('.meal-cell-input'));
      const idx = inputs.indexOf(e.target);
      if (idx === -1) return;
      const moveUp = e.key === 'ArrowUp' || (e.key === 'Enter' && e.shiftKey);
      const next = moveUp
        ? inputs[idx - NUM_MEAL_COLS]
        : inputs[idx + NUM_MEAL_COLS];
      if (next) {
        e.preventDefault();
        next.focus();
        next.select();
      }
    });
  }

  _buildMealWeekGrid(startDate, numDays) {
    const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
    const MEAL_LABELS = [
      this.t('mealTypeBreakfast'), this.t('mealTypeLunch'),
      this.t('mealTypeDinner'), this.t('mealTypeSnack'),
    ];
    const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fmtDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    const rows = [];
    for (let i = 0; i < numDays; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      const dateStr = fmtDate(d);
      const label = `${DAY_NAMES[d.getDay()]} ${d.getMonth() + 1}/${d.getDate()}`;
      const cells = MEAL_TYPES.map(mt =>
        `<td><input type="text" class="meal-cell-input" data-date="${dateStr}" data-meal="${mt}" placeholder="${mt === 'Snack' ? '' : '…'}" /></td>`
      ).join('');
      rows.push(`<tr><td class="day-label">${this.escapeHtml(label)}</td>${cells}</tr>`);
    }
    return `
      <table class="meal-week-table">
        <thead>
          <tr>
            <th></th>
            ${MEAL_LABELS.map(l => `<th>${this.escapeHtml(l)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>${rows.join('')}</tbody>
      </table>
    `;
  }

  async _submitCreateMealWeekPlan() {
    const calId = this.getRootElementById('meal-week-cal')?.value;
    if (!calId) return;

    const inputs = this._root.querySelectorAll('.meal-cell-input');
    const mealsToCreate = [];
    inputs.forEach(inp => {
      const name = inp.value.trim();
      if (!name) return;
      const dateStr = inp.getAttribute('data-date');
      const mealType = inp.getAttribute('data-meal');
      const [y, m, d] = dateStr.split('-').map(Number);
      mealsToCreate.push({ calId, name, mealType, y, m, d });
    });

    if (mealsToCreate.length === 0) return;

    const submitBtn = this.getRootElementById('submit-meal-week-btn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = this.t('creating'); }

    const modal = this.getRootElementById('event-modal');
    modal?.classList.remove('show');

    try {
      for (const meal of mealsToCreate) {
        const { calId, name, mealType, y, m, d } = meal;
        const startDate = `${String(y).padStart(4,'0')}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const endDateObj = new Date(y, m - 1, d + 1);
        const endDate = `${endDateObj.getFullYear()}-${String(endDateObj.getMonth() + 1).padStart(2,'0')}-${String(endDateObj.getDate()).padStart(2,'0')}`;
        const serviceData = { entity_id: calId, summary: `[${mealType}] ${name}`, start_date: startDate, end_date: endDate };
        await this._hass.callService('calendar', 'create_event', serviceData);
      }
      await this.updateEvents();
    } catch (err) {
      console.error('[skylight] Failed to create meal week plan:', err);
      this.showError(this.t('failedCreateEvent'));
    }
  }


  _refreshTaskPanelDom() {
    const panel = this.getRootElementById('task-panel');
    if (!panel) return;
    panel.innerHTML = this._buildTaskPanelContent();
    this._attachTaskPanelEventListeners();
  }

  _attachTaskPanelEventListeners() {
    this.getRootElementById('task-filter-toggle')?.addEventListener('click', () => {
      this._filterBarOpen = !this._filterBarOpen;
      this._refreshTaskPanelDom();
    });
    this.getRootElementById('task-filter-clear-all')?.addEventListener('click', () => {
      this._taskFilters = { contexts: new Set(), tags: new Set(), projects: new Set(), priorities: new Set() };
      this._refreshTaskPanelDom();
    });
    this._root.querySelectorAll('.task-filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const type = chip.dataset.filterType;
        const value = chip.dataset.filterValue;
        const set = this._taskFilters[type];
        if (set.has(value)) set.delete(value); else set.add(value);
        this._refreshTaskPanelDom();
      });
    });
    this._root.querySelectorAll('[data-group-key]').forEach(el => {
      el.addEventListener('click', () => {
        const key = el.dataset.groupKey;
        if (this._collapsedGroups.has(key)) this._collapsedGroups.delete(key);
        else this._collapsedGroups.add(key);
        this._refreshTaskPanelDom();
      });
    });
    this._root.querySelectorAll('.task-item[data-task]').forEach(el => {
      el.addEventListener('dragstart', (e) => this._onTaskDragStart(e, el));
      el.addEventListener('dragend', (e) => this._onDragEnd(e, el));
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const taskId = el.dataset.taskId;
        this._expandedTaskId = this._expandedTaskId === taskId ? null : taskId;
        this._refreshTaskPanelDom();
      });
    });
    this._root.querySelectorAll('.task-detail-save').forEach(btn => {
      btn.addEventListener('click', () => this._saveTaskDetail(btn));
    });
    this._root.querySelectorAll('.task-detail-cancel').forEach(btn => {
      btn.addEventListener('click', () => {
        this._expandedTaskId = null;
        this._refreshTaskPanelDom();
      });
    });
  }

  async _saveTaskDetail(btn) {
    const panel = btn.closest('.task-detail-panel');
    if (!panel) return;
    let task;
    try { task = JSON.parse(btn.dataset.task.replace(/&#39;/g, "'")); } catch { return; }

    let newDue = null, newScheduled = null, newStart = null;

    try {
      if (task.source === 'tasknotes') {
        const updates = {};
        const isDate = v => /^\d{4}-\d{2}-\d{2}$/.test(v || '');
        newDue = isDate(panel.querySelector('#td-due')?.value) ? panel.querySelector('#td-due').value : null;
        newStart = isDate(panel.querySelector('#td-start')?.value) ? panel.querySelector('#td-start').value : null;
        const schedDate = panel.querySelector('#td-sched-date')?.value;
        const schedTime = panel.querySelector('#td-sched-time')?.value;
        newScheduled = isDate(schedDate) ? (schedTime ? `${schedDate}T${schedTime}:00` : schedDate) : null;
        const notes = panel.querySelector('#td-notes')?.value?.trim() || null;
        const priority = panel.querySelector('#td-priority')?.value || null;
        const contexts = (panel.querySelector('#td-contexts')?.value || '').split(',').map(s => s.trim()).filter(Boolean);
        const projects = (panel.querySelector('#td-projects')?.value || '').split(',').map(s => s.trim()).filter(Boolean);
        const tags = (panel.querySelector('#td-tags')?.value || '').split(',').map(s => s.trim()).filter(Boolean);
        if (newDue !== (task.due || null)) updates.due = newDue;
        if (newStart !== (task.start || null)) updates.start = newStart;
        if (newScheduled !== (task.scheduled || null)) updates.scheduled = newScheduled;
        if (notes !== (task.notes || null)) updates.details = notes;
        if (priority !== (task.priority || null)) updates.priority = priority;
        if (JSON.stringify(contexts) !== JSON.stringify(task.contexts || [])) updates.contexts = contexts;
        if (JSON.stringify(projects) !== JSON.stringify(task.projects || [])) updates.projects = projects;
        if (JSON.stringify(tags) !== JSON.stringify(task.tags || [])) updates.tags = tags;
        if (Object.keys(updates).length > 0)
          await this._tasknotesAPI('PUT', `/api/tasks/${encodeURIComponent(task.path)}`, updates);

      } else if (task.source === 'obsidian') {
        const updates = {};
        const isDate = v => /^\d{4}-\d{2}-\d{2}$/.test(v || '');
        newDue = isDate(panel.querySelector('#td-due')?.value) ? panel.querySelector('#td-due').value : null;
        newStart = isDate(panel.querySelector('#td-start')?.value) ? panel.querySelector('#td-start').value : null;
        const schedDate = panel.querySelector('#td-sched-date')?.value;
        const schedTime = panel.querySelector('#td-sched-time')?.value;
        newScheduled = isDate(schedDate) ? (schedTime ? `${schedDate}T${schedTime}:00` : schedDate) : null;
        const priority = panel.querySelector('#td-priority')?.value || null;
        const project = panel.querySelector('#td-project')?.value?.trim() || null;
        const context = panel.querySelector('#td-context')?.value?.trim() || null;
        if (newDue !== (task.due || null)) updates.due = newDue || '';
        if (newStart !== (task.start || null)) updates.start = newStart || '';
        if (newScheduled !== (task.scheduled || null)) updates.scheduled = newScheduled || '';
        if (priority !== (task.priority || null)) updates.priority = priority || '';
        if (project !== (task.project || null)) updates.project = project || '';
        if (context !== (task.context || null)) updates.context = context || '';
        if (Object.keys(updates).length > 0)
          await this._updateObsidianTaskFrontmatter(task.filePath, updates);

      } else if (task.source === 'ha_todo' && this._hass) {
        newDue = panel.querySelector('#td-due')?.value || null;
        const notes = panel.querySelector('#td-notes')?.value?.trim() || null;
        const svcData = { entity_id: task.entityId, item: task.id };
        if (newDue !== (task.due || null)) svcData.due_date = newDue;
        if (notes !== (task.notes || null)) svcData.description = notes || '';
        if (svcData.due_date !== undefined || svcData.description !== undefined)
          await this._hass.callService('todo', 'update_item', svcData);
      }

      // Auto-create a calendar event only when due or scheduled is newly set.
      // Start-only tasks stay in the backlog and do not generate calendar events.
      const hadCalendarDate = !!(task.due || task.scheduled);
      const nowHasCalendarDate = !!(newDue || newScheduled);
      if (!hadCalendarDate && nowHasCalendarDate) {
        const schedDateOnly = newScheduled ? newScheduled.substring(0, 10) : null;
        const anchorDue = newDue || schedDateOnly;
        const eventStartDate = (newStart && newStart !== anchorDue) ? newStart : null;
        if (task.source === 'tasknotes') {
          await this._createCalendarEventForNewTask({
            title: task.summary, due: anchorDue, startDate: eventStartDate,
            notes: task.notes, tasknotesPath: task.path,
          });
        } else if (task.source === 'obsidian') {
          await this._createCalendarEventForNewTask({
            title: task.summary, due: anchorDue, startDate: eventStartDate,
            notes: task.notes, entityId: task.filePath,
          });
        } else if (task.source === 'ha_todo') {
          await this._createCalendarEventForNewTask({
            title: task.summary, due: anchorDue, startDate: eventStartDate,
            notes: task.notes, entityId: task.entityId,
          });
        }
      }

      this._expandedTaskId = null;
      await this.fetchTasks();
      await this._forceEventsRefresh();
    } catch (e) {
      console.warn('[Skylight] Task detail save error:', e);
      this.showError('Failed to save task');
    }
  }

  // ============================================================================
  // TASK FETCHING
  // ============================================================================

  async fetchTasks() {
    if (this._tasksFetching) return;
    this._tasksFetching = true;
    try {
      const source = this._config.task_source;
      if (source === 'ha_todo') {
        this._tasks = await this._fetchTasksFromHA();
      } else if (source === 'obsidian') {
        this._tasks = await this._fetchTasksFromObsidian();
      } else if (source === 'tasknotes') {
        this._tasks = await this._fetchTasksFromTaskNotes();
      } else {
        this._tasks = [];
      }
      this._tasksLastFetch = Date.now();
    } catch (e) {
      console.warn('[Skylight] Task fetch error:', e);
      this._tasks = [];
    } finally {
      this._tasksFetching = false;
      this._refreshTaskPanelDom();
    }
  }

  async _fetchTasksFromHA() {
    if (!this._hass || !this._config.task_entities?.length) return [];
    const tasks = [];
    for (const entityId of this._config.task_entities) {
      try {
        const result = await this._hass.callWS({ type: 'todo/item/list', entity_id: entityId });
        const items = result?.items || [];
        items.forEach(item => {
          if (item.status === 'completed') return;
          if (item.due) return; // Has a date — shows on calendar, not backlog
          tasks.push({
            id: item.uid || item.summary,
            summary: item.summary,
            type: 'task',
            source: 'ha_todo',
            entityId,
            project: this._extractTaggedValue(item.description || '', '#'),
            context: this._extractTaggedValue(item.description || '', '@'),
            priority: this._extractPrefixedValue(item.description || '', 'priority:'),
            due: null,
            notes: item.description || null
          });
        });
      } catch (e) {
        console.warn(`[Skylight] Todo fetch failed for ${entityId}:`, e);
      }
    }
    return tasks;
  }

  async _fetchTasksFromObsidian() {
    const apiUrl = this._config.obsidian_api_url;
    const token = this._config.obsidian_api_token;
    const folder = this._config.obsidian_task_folder || 'Tasks';
    if (!apiUrl) return [];
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    try {
      const listResp = await fetch(`${apiUrl}/vault/${encodeURIComponent(folder)}/`, { headers });
      if (!listResp.ok) return [];
      const listData = await listResp.json();
      const files = (listData.files || []).filter(f => typeof f === 'string' && f.endsWith('.md'));
      const tasks = [];
      for (const filename of files.slice(0, 200)) {
        try {
          const fileResp = await fetch(`${apiUrl}/vault/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`, { headers });
          if (!fileResp.ok) continue;
          const content = await fileResp.text();
          const task = this._parseObsidianTaskNote(content, `${folder}/${filename}`);
          if (task && !task.due && !task.scheduled && !task.start) tasks.push(task);
        } catch (_) { /* skip */ }
      }
      return tasks;
    } catch (e) {
      console.warn('[Skylight] Obsidian API error:', e);
      return [];
    }
  }

  _parseObsidianTaskNote(content, filePath) {
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const filename = filePath.split('/').pop().replace(/\.md$/, '');
    if (!fmMatch) {
      return { id: filePath, summary: filename, type: 'task', source: 'obsidian', filePath, project: null, context: null, priority: null, due: null, scheduled: null, start: null };
    }
    const fm = fmMatch[1];
    const fmVal = (key) => {
      const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
      return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : null;
    };
    const status = fmVal('status') || fmVal('task-status') || 'open';
    if (['done', 'completed', 'cancelled'].includes(status)) return null;
    return {
      id: filePath,
      summary: fmVal('title') || fmVal('name') || filename,
      type: 'task',
      source: 'obsidian',
      filePath,
      project: fmVal('project') || fmVal('project-name'),
      context: fmVal('context') || fmVal('area'),
      priority: fmVal('priority'),
      due: fmVal('due') || fmVal('due-date'),
      scheduled: fmVal('scheduled') || fmVal('scheduled-date'),
      start: fmVal('start') || fmVal('start-date')
    };
  }

  _extractTaggedValue(text, prefix) {
    const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const m = text.match(new RegExp(`${escaped}([A-Za-z][A-Za-z0-9_-]*)`));
    return m ? m[1] : null;
  }

  _extractPrefixedValue(text, prefix) {
    const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const m = text.match(new RegExp(`${escaped}([^\\s]+)`));
    return m ? m[1] : null;
  }

  // ============================================================================
  // TASKNOTES API
  // ============================================================================

  async _tasknotesAPI(method, path, body = null) {
    const baseUrl = (this._config.tasknotes_api_url || '').replace(/\/$/, '');
    if (!baseUrl) throw new Error('TaskNotes API URL not configured');
    const headers = { 'Content-Type': 'application/json' };
    const token = this._config.tasknotes_api_token;
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const options = { method, headers };
    if (body !== null) options.body = JSON.stringify(body);
    const resp = await fetch(`${baseUrl}${path}`, options);
    const json = await resp.json();
    if (!json.success) throw new Error(json.error || 'TaskNotes API error');
    return json.data;
  }

  async _fetchTasksFromTaskNotes() {
    const baseUrl = this._config.tasknotes_api_url;
    if (!baseUrl) return [];
    try {
      const data = await this._tasknotesAPI('POST', '/api/tasks/query', {
        type: 'group', id: 'root', conjunction: 'and',
        children: [
          { type: 'condition', id: 'c1', property: 'status',    operator: 'is-not',          value: 'done'        },
          { type: 'condition', id: 'c2', property: 'archived',  operator: 'is-not-checked'                        },
          { type: 'condition', id: 'c5', property: 'status',    operator: 'is-not',          value: 'in-progress' },
          // Include tasks with no due and no scheduled (regardless of start).
          // Start-only tasks belong in the backlog, not the calendar.
          {
            type: 'group', id: 'g1', conjunction: 'and',
            children: [
              { type: 'condition', id: 'c3', property: 'due',       operator: 'is-empty' },
              { type: 'condition', id: 'c4', property: 'scheduled', operator: 'is-empty' },
            ]
          },
        ],
        sortKey: 'priority', sortDirection: 'desc'
      });
      return (data.tasks || []).map(item => this._mapTaskNoteToTask(item));
    } catch (e) {
      console.warn('[Skylight] TaskNotes fetch error:', e);
      return [];
    }
  }

  // Fetch ALL non-done, non-archived tasks that have at least one date field set.
  // Used to generate synthetic calendar events.
  async _fetchTaskNotesWithDates() {
    const baseUrl = this._config.tasknotes_api_url;
    if (!baseUrl) return [];
    try {
      const data = await this._tasknotesAPI('POST', '/api/tasks/query', {
        type: 'group', id: 'root', conjunction: 'and',
        children: [
          { type: 'condition', id: 'c1', property: 'status',   operator: 'is-not',     value: 'done'  },
          { type: 'condition', id: 'c2', property: 'archived', operator: 'is-not-checked'              },
          {
            type: 'group', id: 'g1', conjunction: 'or',
            children: [
              { type: 'condition', id: 'c3', property: 'due',       operator: 'is-not-empty' },
              { type: 'condition', id: 'c4', property: 'scheduled', operator: 'is-not-empty' },
            ]
          }
        ],
        sortKey: 'due', sortDirection: 'asc'
      });
      return (data.tasks || []).map(item => this._mapTaskNoteToTask(item));
    } catch (e) {
      console.warn('[Skylight] TaskNotes date-tasks fetch error:', e);
      return [];
    }
  }

  _mapTaskNoteToTask(item) {
    return {
      id: item.path,
      summary: item.title,
      type: 'task',
      source: 'tasknotes',
      path: item.path,
      priority: item.priority,
      due: item.due || null,
      scheduled: item.scheduled || null,
      start: item.start || item.startDate || item.start_date || item['start-date'] || null,
      notes: item.details || null,
      contexts: item.contexts || [],
      projects: item.projects || [],
      tags: item.tags || [],
      timeEstimate: item.timeEstimate || null,
      status: item.status,
    };
  }

  // Convert a TaskNotes task with date fields into synthetic calendar event object(s).
  // Returns an array (usually 1 event, possibly 0).
  _taskNoteToSyntheticEvents(task) {
    const pad = n => String(n).padStart(2, '0');
    const fmtDate = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    const addDays = (dateStr, n) => {
      const d = new Date(dateStr + 'T00:00:00');
      d.setDate(d.getDate() + n);
      return fmtDate(d);
    };

    const base = {
      uid: `tasknotes-${task.path}`,
      summary: `[Task] ${task.summary}`,
      entityId: '_tasknotes_',   // sentinel — not a real HA calendar
      color: '#8b5cf6',          // purple to distinguish from calendar events
      _tasknotesPath: task.path,
      _tasknotesTask: task,
      description: `skylight-task://tasknotes/${encodeURIComponent(task.path)}`,
    };

    // When a due date exists, prefer a spanning event anchored by start or scheduled.
    // scheduled is used only as a date (strip any time component) for the span anchor.
    if (task.due) {
      const spanAnchor = task.start || (task.scheduled ? task.scheduled.substring(0, 10) : null);
      if (spanAnchor) {
        // Spanning event: anchor → due (inclusive), e.g. start=Apr 1, due=Apr 10 → Apr 1–10
        return [{ ...base, start: { date: spanAnchor }, end: { date: addDays(task.due, 1) } }];
      }
      // Due only — single-day marker on the due date
      return [{ ...base, start: { date: task.due }, end: { date: addDays(task.due, 1) } }];
    }

    // No due date: fall back to scheduled alone
    if (task.scheduled) {
      const hasTime = /T\d{2}:\d{2}/.test(task.scheduled);
      if (hasTime) {
        // Timed event using scheduled datetime + duration estimate
        const startDt = new Date(task.scheduled);
        const durationMs = task.timeEstimate ? task.timeEstimate * 60 * 1000 : 60 * 60 * 1000;
        const endDt = new Date(startDt.getTime() + durationMs);
        return [{ ...base, start: { dateTime: task.scheduled }, end: { dateTime: endDt.toISOString() } }];
      }
      return [{ ...base, start: { date: task.scheduled }, end: { date: addDays(task.scheduled, 1) } }];
    }

    return [];
  }

  // ============================================================================
  // CREATE TASK MODAL
  // ============================================================================

  showCreateTaskModal(defaultDate = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    if (!modal || !content) return;

    const fmtDate = (d) => d
      ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
      : '';
    const defaultDateStr = defaultDate ? fmtDate(defaultDate) : '';

    // Collect known values from existing tasks for suggestions
    const allTasks = this._tasks || [];
    const knownContexts = [...new Set(allTasks.flatMap(t => Array.isArray(t.contexts) ? t.contexts : (t.context ? [t.context] : [])).filter(Boolean))].sort();
    const knownTags = [...new Set(allTasks.flatMap(t => Array.isArray(t.tags) ? t.tags : []).filter(v => v && v.toLowerCase() !== 'task'))].sort();
    const knownProjects = [...new Set(allTasks.flatMap(t => Array.isArray(t.projects) ? t.projects : (t.project ? [t.project] : [])).filter(Boolean))].sort();

    const taskEntities = this._config.task_source === 'ha_todo' ? (this._config.task_entities || []) : [];
    const entitySelector = taskEntities.length > 0 ? `
      <div class="form-group form-group-inline">
        <div class="form-inline-row">
          <label class="form-label">${this.t('taskSource')}</label>
          <select class="form-input" id="task-entity-id">
            ${taskEntities.map((e, i) => `<option value="${e}"${i === 0 ? ' selected' : ''}>${this.escapeHtml(this.getCalendarName(e))}</option>`).join('')}
          </select>
        </div>
      </div>` : '';

    const isHaTodo = this._config.task_source === 'ha_todo';
    const esc = s => this.escapeHtml(s);

    // Priority pills
    const priorities = [
      { value: '',         label: this.t('priorityNone'),    cls: 'none' },
      { value: 'highest',  label: this.t('priorityHighest'), cls: 'highest' },
      { value: 'high',     label: this.t('priorityHigh'),    cls: 'high' },
      { value: 'medium',   label: this.t('priorityMedium'),  cls: 'medium' },
      { value: 'low',      label: this.t('priorityLow'),     cls: 'low' },
      { value: 'lowest',   label: this.t('priorityLowest'),  cls: 'lowest' },
    ];
    const priorityPills = priorities.map(p =>
      `<button type="button" class="task-priority-pill${p.value === '' ? ' active-none' : ''}" data-priority="${esc(p.value)}" data-cls="${p.cls}">${esc(p.label)}</button>`
    ).join('');

    // Suggestion chips helper
    const suggestChips = (values, targetId) => values.length
      ? `<div class="task-suggest-chips">${values.map(v => `<button type="button" class="task-suggest-chip" data-target="${targetId}" data-value="${esc(v)}">${esc(v)}</button>`).join('')}</div>`
      : '';

    // Multi-value fields with suggestions (tasknotes / obsidian only)
    const multiFields = !isHaTodo ? `
      <div class="task-suggest-group">
        <label>Tags <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:12px;color:#9ca3af">(comma-separated)</span></label>
        <input type="text" class="form-input" id="task-tags" placeholder="work, urgent, follow-up" />
        ${suggestChips(knownTags, 'task-tags')}
      </div>
      <div class="task-suggest-group">
        <label>Contexts <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:12px;color:#9ca3af">(comma-separated)</span></label>
        <input type="text" class="form-input" id="task-contexts" placeholder="@home, @work" />
        ${suggestChips(knownContexts, 'task-contexts')}
      </div>
      <div class="task-suggest-group">
        <label>Projects <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:12px;color:#9ca3af">(comma-separated)</span></label>
        <input type="text" class="form-input" id="task-projects" placeholder="Project Alpha" />
        ${suggestChips(knownProjects, 'task-projects')}
      </div>` : '';

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('addTask')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="create-task-form">
          ${entitySelector}
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('taskTitle')}<span class="form-required">*</span></label>
              <input type="text" class="form-input" id="task-title" placeholder="${this.t('taskTitlePlaceholder')}" autofocus />
            </div>
          </div>
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('priority')}</label>
              <div>
                <input type="hidden" id="task-priority" value="" />
                <div class="task-priority-row">${priorityPills}</div>
              </div>
            </div>
          </div>
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">Dates</label>
              <div class="task-create-dates-row">
                <div class="task-create-date-group">
                  <label>${this.t('dueDate')}</label>
                  <input type="date" id="task-due" value="${defaultDateStr}" />
                </div>
                ${!isHaTodo ? `
                <div class="task-create-date-group">
                  <label>Scheduled</label>
                  <input type="date" id="task-scheduled" />
                </div>
                <div class="task-create-date-group">
                  <label>Start</label>
                  <input type="date" id="task-start" />
                </div>` : ''}
              </div>
            </div>
          </div>
          ${multiFields}
          <div class="form-group form-group-inline">
            <div class="form-inline-row form-inline-row-top">
              <label class="form-label">${this.t('description')}</label>
              <textarea class="form-input form-textarea" id="task-notes" placeholder="${this.t('descriptionPlaceholder')}"></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-task-btn">${this.t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-task-btn">${this.t('createTask')}</button>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('show');
    this.getRootElementById('close-modal')?.addEventListener('click', () => modal.classList.remove('show'));
    this.getRootElementById('cancel-task-btn')?.addEventListener('click', () => modal.classList.remove('show'));
    this.getRootElementById('create-task-form')?.addEventListener('submit', (e) => { e.preventDefault(); this._submitCreateTask(); });

    // Priority pill logic
    const priorityHidden = content.querySelector('#task-priority');
    content.querySelectorAll('.task-priority-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const val = pill.dataset.priority;
        const alreadyActive = priorityHidden.value === val;
        const newVal = alreadyActive ? '' : val;
        priorityHidden.value = newVal;
        content.querySelectorAll('.task-priority-pill').forEach(p => {
          p.className = 'task-priority-pill' + (p.dataset.priority === newVal ? ` active-${p.dataset.cls}` : '');
        });
        // "None" pill always shows its style when nothing is selected
        if (!newVal) {
          const nonePill = content.querySelector('.task-priority-pill[data-priority=""]');
          if (nonePill) nonePill.classList.add('active-none');
        }
      });
    });

    // Suggestion chip logic — toggles values in comma-separated inputs
    content.querySelectorAll('.task-suggest-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const targetId = chip.dataset.target;
        const val = chip.dataset.value;
        const input = content.querySelector(`#${targetId}`);
        if (!input) return;
        const current = input.value.split(',').map(s => s.trim()).filter(Boolean);
        const idx = current.indexOf(val);
        if (idx >= 0) {
          current.splice(idx, 1);
          chip.classList.remove('active');
        } else {
          current.push(val);
          chip.classList.add('active');
        }
        input.value = current.join(', ');
        // Keep chips in sync when user types manually
        input.dispatchEvent(new Event('change'));
      });
    });

    // Keep suggestion chips in sync when user edits the input text directly
    ['task-tags', 'task-contexts', 'task-projects'].forEach(id => {
      const input = content.querySelector(`#${id}`);
      if (!input) return;
      input.addEventListener('input', () => {
        const current = input.value.split(',').map(s => s.trim()).filter(Boolean);
        content.querySelectorAll(`.task-suggest-chip[data-target="${id}"]`).forEach(chip => {
          chip.classList.toggle('active', current.includes(chip.dataset.value));
        });
      });
    });
  }

  async _submitCreateTask() {
    const title = this.getRootElementById('task-title')?.value?.trim();
    if (!title) { this.showError(this.t('eventTitleRequired')); return; }
    const priority = this.getRootElementById('task-priority')?.value || null;
    const isDate = v => /^\d{4}-\d{2}-\d{2}$/.test(v || '');
    const due = isDate(this.getRootElementById('task-due')?.value) ? this.getRootElementById('task-due').value : null;
    const scheduled = isDate(this.getRootElementById('task-scheduled')?.value) ? this.getRootElementById('task-scheduled').value : null;
    const start = isDate(this.getRootElementById('task-start')?.value) ? this.getRootElementById('task-start').value : null;
    const notes = this.getRootElementById('task-notes')?.value?.trim() || null;
    const entityId = this.getRootElementById('task-entity-id')?.value || this._config.task_entities?.[0] || null;
    // Multi-value fields (tasknotes/obsidian)
    const tags = (this.getRootElementById('task-tags')?.value || '').split(',').map(s => s.trim()).filter(Boolean);
    const contexts = (this.getRootElementById('task-contexts')?.value || '').split(',').map(s => s.trim()).filter(Boolean);
    const projects = (this.getRootElementById('task-projects')?.value || '').split(',').map(s => s.trim()).filter(Boolean);
    // Legacy single-value fields (ha_todo encodes these in description)
    const project = projects[0] || null;
    const context = contexts[0] || null;
    const submitBtn = this.getRootElementById('submit-task-btn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = this.t('creating'); }
    try {
      const createdPath = await this.createTask({ title, project, context, priority, due, scheduled, start, notes, tags, contexts, projects, entityId });
      // Mirror as a calendar event when due or scheduled is set (start-only stays in backlog)
      const anchorDate = due || (scheduled ? scheduled.substring(0, 10) : null);
      const source = this._config.task_source;
      if (anchorDate && source === 'ha_todo' && entityId) {
        await this._createCalendarEventForNewTask({ title, due: anchorDate, startDate: start || null, notes, entityId });
      } else if (anchorDate && source === 'tasknotes' && createdPath) {
        await this._createCalendarEventForNewTask({ title, due: anchorDate, startDate: start || null, notes, tasknotesPath: createdPath });
      }
      this.getRootElementById('event-modal')?.classList.remove('show');
      if (this._sidePanelOpen) await this.fetchTasks();
      await this._forceEventsRefresh();
    } catch (e) {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = this.t('createTask'); }
      this.showError(this.t('failedCreateTask'));
    }
  }

  async _createCalendarEventForNewTask({ title, due, startDate, notes, entityId, tasknotesPath }) {
    const writableCalendars = this.getWritableCalendars();
    if (!this._config.enable_event_management || writableCalendars.length === 0) return;

    let calendarId;
    if (this._config.ask_calendar_on_task_drop && writableCalendars.length > 1) {
      calendarId = await this._pickCalendarForTaskDrop(writableCalendars);
      if (!calendarId) return;
    } else {
      calendarId = (this._config.task_calendar && writableCalendars.includes(this._config.task_calendar))
        ? this._config.task_calendar
        : writableCalendars[0];
    }

    // Build task link — for TaskNotes use path directly; for HA re-fetch UID
    let taskLink;
    if (tasknotesPath) {
      taskLink = `skylight-task://tasknotes/${encodeURIComponent(tasknotesPath)}`;
    } else {
      let itemId = title;
      try {
        const result = await this._hass.callWS({ type: 'todo/item/list', entity_id: entityId });
        const match = (result?.items || []).find(item => item.summary === title);
        if (match) itemId = match.uid || match.summary;
      } catch (_) { /* use title fallback */ }
      taskLink = `skylight-task://${entityId}/${itemId}`;
    }

    const linkedDescription = notes ? `${notes}\n${taskLink}` : taskLink;
    const pad = n => String(n).padStart(2, '0');
    // Event spans from startDate (if set) through due date; end is exclusive (due+1 day)
    const eventStart = startDate || due;
    const [y, m, d] = due.split('-').map(Number);
    const endDateObj = new Date(y, m - 1, d + 1);
    const endDate = `${endDateObj.getFullYear()}-${pad(endDateObj.getMonth() + 1)}-${pad(endDateObj.getDate())}`;

    await this.createEvent(calendarId, {
      summary: `[Task] ${title}`,
      start: { date: eventStart },
      end:   { date: endDate },
      description: linkedDescription,
    });
  }

  async createTask({ title, project, context, priority, due, scheduled, start, notes, tags, contexts, projects, entityId }) {
    const source = this._config.task_source;
    if (source === 'ha_todo') {
      if (!this._hass || !entityId) throw new Error('No HA todo entity configured');
      let desc = '';
      if (project) desc += `#${project} `;
      if (context) desc += `${context.startsWith('@') ? context : '@' + context} `;
      if (priority) desc += `priority:${priority} `;
      if (notes) desc += notes;
      await this._hass.callService('todo', 'add_item', {
        entity_id: entityId,
        item: title,
        due_date: due || undefined,
        description: desc.trim() || undefined
      });
    } else if (source === 'obsidian') {
      await this._createObsidianTask({ title, project, context, priority, due, scheduled, start, notes, tags });
    } else if (source === 'tasknotes') {
      // Explicitly set date fields (including null) so the plugin doesn't apply its own defaults
      const body = { title, status: 'open', scheduled: scheduled || null, start: start || null };
      if (due)              body.due      = due;
      if (priority)         body.priority = priority;
      if (notes)            body.details  = notes;
      if (tags?.length)     body.tags     = tags;
      if (contexts?.length) body.contexts = contexts;
      if (projects?.length) body.projects = projects;
      const created = await this._tasknotesAPI('POST', '/api/tasks', body);
      // Return the path so callers can embed the link without a re-fetch
      return created?.path || null;
    } else {
      throw new Error('No task source configured');
    }
  }

  async _createObsidianTask({ title, project, context, priority, due, scheduled, start, notes, tags, parentFilePath }) {
    const apiUrl = this._config.obsidian_api_url;
    const token = this._config.obsidian_api_token;
    const folder = this._config.obsidian_task_folder || 'Tasks';
    if (!apiUrl) throw new Error('Obsidian API URL not configured');
    const headers = { 'Content-Type': 'text/markdown' };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const safeTitle = title.replace(/[/\\:*?"<>|]/g, '-');
    let fm = '---\n';
    fm += `title: "${title.replace(/"/g, '\\"')}"\n`;
    fm += `status: open\n`;
    if (project) fm += `project: "${project.replace(/"/g, '\\"')}"\n`;
    if (context) fm += `context: "${context.replace(/"/g, '\\"')}"\n`;
    if (priority) fm += `priority: ${priority}\n`;
    if (due) fm += `due: ${due}\n`;
    if (scheduled) fm += `scheduled: ${scheduled}\n`;
    if (start) fm += `start: ${start}\n`;
    if (tags?.length) fm += `tags: [${tags.map(t => `"${t.replace(/"/g, '\\"')}"`).join(', ')}]\n`;
    if (parentFilePath) fm += `parent: "${parentFilePath.replace(/"/g, '\\"')}"\n`;
    fm += `created: ${new Date().toISOString().split('T')[0]}\n`;
    fm += '---\n\n';
    if (notes) fm += notes;
    const resp = await fetch(`${apiUrl}/vault/${encodeURIComponent(folder)}/${encodeURIComponent(safeTitle + '.md')}`, {
      method: 'PUT', headers, body: fm
    });
    if (!resp.ok) throw new Error(`Obsidian API error: ${resp.status}`);
    return `${folder}/${safeTitle}.md`;
  }

  // ============================================================================
  // CREATE MEAL PLAN MODAL
  // ============================================================================

  showCreateMealPlanModal(defaultDate = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    if (!modal || !content) return;
    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) { this.showError(this.t('noWritableCalendars')); return; }
    const fmtDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const today = defaultDate || new Date();
    const defaultDateStr = fmtDate(today);
    const mealCal = this._config.meal_calendar;
    const defaultCalIdx = Math.max(0, mealCal ? writableCalendars.indexOf(mealCal) : 0);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('addMealPlan')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="create-meal-form">
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('calendar')}<span class="form-required">*</span></label>
              <select class="form-input" id="meal-calendar-id">
                ${writableCalendars.map((e, i) => `<option value="${e}"${i === defaultCalIdx ? ' selected' : ''}>${this.escapeHtml(this.getCalendarName(e))}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('mealName')}<span class="form-required">*</span></label>
              <input type="text" class="form-input" id="meal-name" placeholder="${this.t('mealNamePlaceholder')}" />
            </div>
          </div>
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('startDate')}<span class="form-required">*</span></label>
              <input type="date" class="form-input" id="meal-date" value="${defaultDateStr}" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">${this.t('mealType')}</label>
            <div class="meal-type-grid">
              <label class="meal-type-option"><input type="radio" name="meal-type" value="Breakfast" checked /> ${this.t('mealTypeBreakfast')}</label>
              <label class="meal-type-option"><input type="radio" name="meal-type" value="Lunch" /> ${this.t('mealTypeLunch')}</label>
              <label class="meal-type-option"><input type="radio" name="meal-type" value="Dinner" /> ${this.t('mealTypeDinner')}</label>
              <label class="meal-type-option"><input type="radio" name="meal-type" value="Snack" /> ${this.t('mealTypeSnack')}</label>
            </div>
          </div>
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('description')}</label>
              <textarea class="form-input form-textarea" id="meal-notes" placeholder="${this.t('descriptionPlaceholder')}"></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-meal-btn">${this.t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-meal-btn">${this.t('createMeal')}</button>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('show');
    this.getRootElementById('close-modal')?.addEventListener('click', () => modal.classList.remove('show'));
    this.getRootElementById('cancel-meal-btn')?.addEventListener('click', () => modal.classList.remove('show'));
    this.getRootElementById('create-meal-form')?.addEventListener('submit', (e) => { e.preventDefault(); this._submitCreateMealPlan(); });

  }

  async _submitCreateMealPlan() {
    const mealName = this.getRootElementById('meal-name')?.value?.trim();
    const mealDate = this.getRootElementById('meal-date')?.value;
    const calendarId = this.getRootElementById('meal-calendar-id')?.value;
    const mealType = this._root.querySelector('input[name="meal-type"]:checked')?.value || 'Meal';
    const notes = this.getRootElementById('meal-notes')?.value?.trim() || null;
    if (!mealName) { this.showError(this.t('eventTitleRequired')); return; }
    if (!mealDate) { this.showError(this.t('startEndDatesRequired')); return; }
    const submitBtn = this.getRootElementById('submit-meal-btn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = this.t('creating'); }
    try {
      const [y, mo, d] = mealDate.split('-').map(Number);
      const endDateObj = new Date(y, mo - 1, d + 1);
      const endDate = `${endDateObj.getFullYear()}-${String(endDateObj.getMonth() + 1).padStart(2, '0')}-${String(endDateObj.getDate()).padStart(2, '0')}`;
      const serviceData = {
        entity_id: calendarId,
        summary: `[${mealType}] ${mealName}`,
        start_date: mealDate,
        end_date: endDate,
        description: notes || undefined
      };
      await this._hass.callService('calendar', 'create_event', serviceData);
      this.getRootElementById('event-modal')?.classList.remove('show');
      await this.updateEvents();
    } catch (e) {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = this.t('createMeal'); }
      this.showError(this.t('failedCreateEvent'));
    }
  }

  // ============================================================================
  // DRAG AND DROP
  // ============================================================================

  initDragAndDrop() {
    if (!this._config.enable_event_management) return;

    // ── Draggable calendar events (all views) ────────────────────────────────
    // Month view uses .event, week-compact uses .week-compact-event,
    // schedule timed uses .week-standard-event, schedule all-day uses .all-day-event
    const EVENT_SELECTOR = [
      '.event[data-event]',
      '.week-compact-event[data-event]',
      '.week-standard-event[data-event]',
      '.all-day-event[data-event]',
    ].join(', ');

    this._root.querySelectorAll(EVENT_SELECTOR).forEach(el => {
      el.setAttribute('draggable', 'true');
      el.addEventListener('dragstart', (e) => this._onEventDragStart(e, el));
      el.addEventListener('dragend', (e) => this._onDragEnd(e, el));
    });

    // ── Task panel items ─────────────────────────────────────────────────────
    this._attachTaskPanelEventListeners();

    // ── Month view day cells ─────────────────────────────────────────────────
    this._root.querySelectorAll('.day-cell[data-date]').forEach(el => {
      el.addEventListener('dragover', (e) => { e.preventDefault(); el.classList.add('drag-over'); });
      el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
      el.addEventListener('drop', (e) => this._onDropOnDayCell(e, el));
    });

    // ── Schedule view: all-day strip — drop target (maps to all-day on that date)
    this._root.querySelectorAll('.all-day-events').forEach(el => {
      el.addEventListener('dragover', (e) => { e.preventDefault(); e.stopPropagation(); el.classList.add('drag-over'); });
      el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
      el.addEventListener('drop', (e) => {
        e.stopPropagation();
        el.classList.remove('drag-over');
        const column = el.closest('[data-date]');
        const targetDate = this._parseDateAttr(column?.getAttribute('data-date'));
        if (!targetDate) return;
        this._handleDrop(targetDate, null, true); // null hour + forceAllDay
      });
    });

    // ── Schedule view: timed slots ───────────────────────────────────────────
    this._root.querySelectorAll('.day-time-slot[data-hour]').forEach(el => {
      el.addEventListener('dragover', (e) => { e.preventDefault(); e.stopPropagation(); el.classList.add('drag-over'); });
      el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
      el.addEventListener('drop', (e) => {
        e.stopPropagation(); // prevent bubbling to parent column handler
        this._onDropOnTimeSlot(e, el);
      });
    });

    // ── Schedule view: day column (catches drops not on a specific slot/strip)
    this._root.querySelectorAll('.week-standard-day-column[data-date]').forEach(el => {
      el.addEventListener('dragover', (e) => { e.preventDefault(); el.classList.add('drag-over'); });
      el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
      el.addEventListener('drop', (e) => this._onDropOnDayColumn(e, el));
    });

    // ── Week-compact day columns ─────────────────────────────────────────────
    this._root.querySelectorAll('.week-day-column[data-date]').forEach(el => {
      el.addEventListener('dragover', (e) => { e.preventDefault(); el.classList.add('drag-over'); });
      el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
      el.addEventListener('drop', (e) => this._onDropOnDayColumn(e, el));
    });
  }

  _onEventDragStart(e, el) {
    try {
      const eventData = JSON.parse(el.getAttribute('data-event').replace(/&#39;/g, "'"));
      e.dataTransfer.setData('application/x-skylight-event', JSON.stringify(eventData));
      e.dataTransfer.effectAllowed = 'move';
      el.classList.add('dragging');
      this._draggingEvent = eventData;
      this._draggingType = 'event';
    } catch (_) { e.preventDefault(); }
  }

  _onTaskDragStart(e, el) {
    try {
      const taskData = JSON.parse(el.getAttribute('data-task').replace(/&#39;/g, "'"));
      e.dataTransfer.setData('application/x-skylight-task', JSON.stringify(taskData));
      e.dataTransfer.effectAllowed = 'copy';
      el.classList.add('dragging');
      this._draggingTask = taskData;
      this._draggingType = 'task';
    } catch (_) { e.preventDefault(); }
  }

  _onDragEnd(_e, el) {
    el.classList.remove('dragging');
    this._draggingEvent = null;
    this._draggingTask = null;
    this._draggingType = null;
    this._root.querySelectorAll('.drag-over').forEach(d => d.classList.remove('drag-over'));
  }

  _onDropOnDayCell(e, el) {
    e.preventDefault();
    el.classList.remove('drag-over');
    const targetDate = this._parseDateAttr(el.getAttribute('data-date'));
    if (!targetDate) return;
    this._handleDrop(targetDate, null);
  }

  _onDropOnTimeSlot(e, el) {
    e.preventDefault();
    el.classList.remove('drag-over');
    const column = el.closest('[data-date]');
    const targetDate = this._parseDateAttr(column?.getAttribute('data-date'));
    const hour = parseInt(el.getAttribute('data-hour') || '0', 10);
    if (!targetDate) return;
    targetDate.setHours(hour, 0, 0, 0);
    this._handleDrop(targetDate, hour);
  }

  _onDropOnDayColumn(e, el) {
    e.preventDefault();
    el.classList.remove('drag-over');
    const targetDate = this._parseDateAttr(el.getAttribute('data-date'));
    if (!targetDate) return;
    this._handleDrop(targetDate, null);
  }

  _parseDateAttr(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  _handleDrop(targetDate, targetHour, forceAllDay = false) {
    if (this._draggingType === 'task' && this._draggingTask) {
      this._handleTaskDrop(this._draggingTask, targetDate, targetHour);
    } else if (this._draggingType === 'event' && this._draggingEvent) {
      this._handleEventDrop(this._draggingEvent, targetDate, targetHour, forceAllDay);
    }
  }

  _handleEventDrop(event, targetDate, targetHour, forceAllDay = false) {
    if (!event || !targetDate) return;
    const isAllDay = !!(event.start?.date && !event.start?.dateTime);
    if (targetHour !== null) {
      this._rescheduleEventToDateTime(event, targetDate, targetHour);
    } else if (isAllDay || forceAllDay) {
      this._rescheduleAllDayEvent(event, targetDate);
    } else {
      this._rescheduleEventToSameTimeOnDay(event, targetDate);
    }
  }

  _handleTaskDrop(task, targetDate, targetHour) {
    if (!task || !targetDate) return;

    // The modal (convert vs create child) only makes sense when the task already
    // has an *all-day* date and is being given a specific time for the first time.
    // Undated backlog tasks have no date at all — just schedule them directly.
    const taskHasAllDayDate = !!(task.due || task.scheduled || task.start);

    if (targetHour !== null && taskHasAllDayDate) {
      // Task already has a date but no time — offer convert or create-child
      this._showTaskScheduleOptionsModal(task, targetDate, targetHour);
    } else {
      // Undated backlog task (or dropping on a day cell) — schedule directly
      this._scheduleTask(task, targetDate, targetHour, 'convert');
    }
  }

  _showTaskScheduleOptionsModal(task, targetDate, targetHour) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    if (!modal || !content) return;
    const pad = n => String(n).padStart(2, '0');
    const timeStr = `${pad(targetHour)}:00`;
    const dateStr = targetDate.toLocaleDateString(this.getLocale(), { weekday: 'short', month: 'short', day: 'numeric' });

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('taskDropTitle')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <p style="margin:0 0 8px;font-size:14px;">${this.t('taskDropPrompt')}</p>
        <p style="margin:0 0 20px;font-size:13px;color:#6b7280;">
          <strong>${this.escapeHtml(task.summary)}</strong>&nbsp;→&nbsp;${this.escapeHtml(dateStr)}&nbsp;${timeStr}
        </p>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <button class="modal-btn modal-btn-primary" id="convert-task-btn" style="text-align:left;">⏰ ${this.t('convertToScheduled')}</button>
          <button class="modal-btn modal-btn-secondary" id="child-task-btn" style="text-align:left;">↳ ${this.t('createChildTask')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');
    this.getRootElementById('close-modal')?.addEventListener('click', () => modal.classList.remove('show'));
    this.getRootElementById('convert-task-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this._scheduleTask(task, targetDate, targetHour, 'convert');
    });
    this.getRootElementById('child-task-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this._scheduleTask(task, targetDate, targetHour, 'child');
    });
  }

  // Shows a modal letting the user pick which calendar a task drop lands in.
  // Resolves with the chosen entityId, or null if cancelled.
  _pickCalendarForTaskDrop(writableCalendars) {
    return new Promise((resolve) => {
      const modal = this.getRootElementById('event-modal');
      const content = this.getRootElementById('modal-content');

      const calendarButtons = writableCalendars.map(calId => `
        <button class="btn btn-secondary cal-pick-btn" style="width:100%;margin-bottom:6px;text-align:left;" data-id="${this.escapeHtml(calId)}">
          ${this.escapeHtml(this.getCalendarName(calId))}
        </button>
      `).join('');

      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">Add to calendar</h3>
          <p class="confirm-message">Choose which calendar to create this event in:</p>
          <div style="margin:12px 0;">${calendarButtons}</div>
          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-cal-pick-btn">Cancel</button>
          </div>
        </div>
      `;

      modal.classList.add('show');

      const finish = (calId) => { modal.classList.remove('show'); resolve(calId); };

      this._root.querySelectorAll('.cal-pick-btn').forEach(btn =>
        btn.addEventListener('click', () => finish(btn.getAttribute('data-id')))
      );
      this.getRootElementById('cancel-cal-pick-btn')?.addEventListener('click', () => finish(null));
    });
  }

  async _scheduleTask(task, targetDate, targetHour, mode = 'convert') {
    const pad = n => String(n).padStart(2, '0');
    const scheduledDate = `${targetDate.getFullYear()}-${pad(targetDate.getMonth() + 1)}-${pad(targetDate.getDate())}`;
    try {
      if (task.source === 'ha_todo') {
        if (mode === 'child') {
          const timeLabel = targetHour !== null ? ` ${pad(targetHour)}:00` : '';
          await this.createTask({
            title: `${task.summary} (${scheduledDate}${timeLabel})`,
            project: task.project, context: task.context, priority: task.priority,
            due: scheduledDate, notes: `Subtask of: ${task.summary}`, entityId: task.entityId
          });
        } else {
          if (this._hass && task.entityId) {
            await this._hass.callService('todo', 'update_item', {
              entity_id: task.entityId, item: task.id, due_date: scheduledDate
            });
          }
          // Also create a corresponding calendar event
          const writableCalendars = this.getWritableCalendars();
          if (this._config.enable_event_management && writableCalendars.length > 0) {
            // Determine target calendar: picker > configured default > first writable
            let calendarId;
            if (this._config.ask_calendar_on_task_drop && writableCalendars.length > 1) {
              calendarId = await this._pickCalendarForTaskDrop(writableCalendars);
              if (!calendarId) {
                // User cancelled picker — due date was already set, just refresh
                if (this._sidePanelOpen) await this.fetchTasks();
                await this._forceEventsRefresh();
                return;
              }
            } else {
              calendarId = (this._config.task_calendar && writableCalendars.includes(this._config.task_calendar))
                ? this._config.task_calendar
                : writableCalendars[0];
            }
            const taskLink = `skylight-task://${task.entityId}/${task.id}`;
            const linkedDescription = task.notes ? `${task.notes}\n${taskLink}` : taskLink;
            let eventData;
            if (targetHour !== null) {
              const endHour = Math.min(targetHour + 1, 23);
              eventData = {
                summary: `[Task] ${task.summary}`,
                start: { dateTime: `${scheduledDate}T${pad(targetHour)}:00:00` },
                end:   { dateTime: `${scheduledDate}T${pad(endHour)}:00:00` },
                description: linkedDescription,
              };
            } else {
              const endDateObj = new Date(targetDate);
              endDateObj.setDate(endDateObj.getDate() + 1);
              const endDate = `${endDateObj.getFullYear()}-${pad(endDateObj.getMonth() + 1)}-${pad(endDateObj.getDate())}`;
              eventData = {
                summary: `[Task] ${task.summary}`,
                start: { date: scheduledDate },
                end:   { date: endDate },
                description: linkedDescription,
              };
            }
            await this.createEvent(calendarId, eventData);
          }
        }
      } else if (task.source === 'obsidian') {
        if (mode === 'child') {
          await this._createObsidianTask({
            title: `${task.summary} (scheduled)`, project: task.project, context: task.context,
            priority: task.priority, due: scheduledDate, notes: null, parentFilePath: task.filePath
          });
        } else {
          await this._updateObsidianTaskDate(task.filePath, scheduledDate);
        }
      } else if (task.source === 'tasknotes') {
        if (mode === 'child') {
          await this._tasknotesAPI('POST', '/api/tasks', {
            title: `${task.summary} (scheduled)`,
            status: 'open',
            due: scheduledDate,
            details: `Subtask of: ${task.summary}`,
          });
        } else {
          // Set the due date on the task
          await this._tasknotesAPI('PUT', `/api/tasks/${encodeURIComponent(task.path)}`, { due: scheduledDate });

          // Create linked calendar event
          const writableCalendars = this.getWritableCalendars();
          if (this._config.enable_event_management && writableCalendars.length > 0) {
            let calendarId;
            if (this._config.ask_calendar_on_task_drop && writableCalendars.length > 1) {
              calendarId = await this._pickCalendarForTaskDrop(writableCalendars);
              if (!calendarId) {
                if (this._sidePanelOpen) await this.fetchTasks();
                await this._forceEventsRefresh();
                return;
              }
            } else {
              calendarId = (this._config.task_calendar && writableCalendars.includes(this._config.task_calendar))
                ? this._config.task_calendar : writableCalendars[0];
            }
            const taskLink = `skylight-task://tasknotes/${encodeURIComponent(task.path)}`;
            const linkedDescription = task.notes ? `${task.notes}\n${taskLink}` : taskLink;
            let eventData;
            if (targetHour !== null) {
              const durationMs = task.timeEstimate ? task.timeEstimate * 60 * 1000 : 60 * 60 * 1000;
              const endDt = new Date(`${scheduledDate}T${pad(targetHour)}:00:00`);
              endDt.setTime(endDt.getTime() + durationMs);
              const endStr = `${scheduledDate}T${pad(Math.min(endDt.getHours(), 23))}:${pad(endDt.getMinutes())}:00`;
              eventData = {
                summary: `[Task] ${task.summary}`,
                start: { dateTime: `${scheduledDate}T${pad(targetHour)}:00:00` },
                end:   { dateTime: endStr },
                description: linkedDescription,
              };
            } else {
              const endDateObj = new Date(targetDate);
              endDateObj.setDate(endDateObj.getDate() + 1);
              const endDate = `${endDateObj.getFullYear()}-${pad(endDateObj.getMonth() + 1)}-${pad(endDateObj.getDate())}`;
              eventData = {
                summary: `[Task] ${task.summary}`,
                start: { date: scheduledDate },
                end:   { date: endDate },
                description: linkedDescription,
              };
            }
            await this.createEvent(calendarId, eventData);
          }
        }
      }
      if (this._sidePanelOpen) await this.fetchTasks();
      await this._forceEventsRefresh();
    } catch (e) {
      console.warn('[Skylight] Schedule task error:', e);
      this.showError(this.t('failedCreateTask'));
    }
  }

  async _updateObsidianTaskDate(filePath, scheduledDate) {
    await this._updateObsidianTaskFrontmatter(filePath, { scheduled: scheduledDate });
  }

  // Update one or more YAML frontmatter fields in an Obsidian file.
  // Pass { key: value } — empty string/null removes the key.
  // All regex work is scoped to the frontmatter section only so body content
  // (e.g. "start: phase 1" in the note body) is never accidentally matched.
  async _updateObsidianTaskFrontmatter(filePath, updates) {
    const apiUrl = this._config.obsidian_api_url;
    const token = this._config.obsidian_api_token;
    if (!apiUrl || !filePath) return;
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    const getResp = await fetch(`${apiUrl}/vault/${encodeURIComponent(filePath)}`, { headers });
    if (!getResp.ok) throw new Error(`Obsidian read error: ${getResp.status}`);
    const raw = await getResp.text();

    // Isolate the frontmatter block (handles both LF and CRLF line endings)
    const fmBounds = raw.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))/);
    if (!fmBounds) return; // no frontmatter — bail rather than corrupt the file

    const [fullMatch, opener, fmBody, closer] = fmBounds;
    const noteBody = raw.substring(fullMatch.length);
    let fm = fmBody;

    for (const [key, value] of Object.entries(updates)) {
      const esc = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const keyLine = new RegExp(`^${esc}:.*$`, 'm');
      if (!value) {
        // Remove the key's line entirely
        fm = fm.replace(new RegExp(`^${esc}:[ \\t]*[^\\r\\n]*(\\r?\\n)?`, 'm'), '');
      } else if (keyLine.test(fm)) {
        // Replace the existing line in-place
        fm = fm.replace(keyLine, `${key}: ${value}`);
      } else {
        // Append as a new line at the end of the frontmatter body
        fm = fm.replace(/\s*$/, '') + `\n${key}: ${value}`;
      }
    }

    const content = opener + fm + closer + noteBody;
    const putResp = await fetch(`${apiUrl}/vault/${encodeURIComponent(filePath)}`, {
      method: 'PUT', headers: { ...headers, 'Content-Type': 'text/markdown' }, body: content
    });
    if (!putResp.ok) throw new Error(`Obsidian write error: ${putResp.status}`);
  }

  async _rescheduleEventToDateTime(event, targetDate, targetHour) {
    const pad = n => String(n).padStart(2, '0');
    const d = `${targetDate.getFullYear()}-${pad(targetDate.getMonth() + 1)}-${pad(targetDate.getDate())}`;

    // Rule 5: TaskNotes synthetic event dragged from all-day to timed slot
    if (event._tasknotesTask) {
      await this._scheduleTaskNotesEventToTime(event._tasknotesTask, d, targetHour);
      return;
    }

    if (!event?.uid || !event?.entityId) return;
    const endHour = Math.min(targetHour + 1, 23);
    const eventData = {
      summary: event.summary,
      start: { dateTime: `${d}T${pad(targetHour)}:00:00` },
      end:   { dateTime: `${d}T${pad(endHour)}:00:00` },
      location: event.location,
      description: event.description,
      rrule: event.rrule,
    };
    try {
      await this.updateEvent(event, event.entityId, eventData);
      await this._syncLinkedTaskDate(this._extractTaskLink(event.description), d);
      await this._forceEventsRefresh();
    } catch (e) { this.showError(this.t('failedUpdateEvent')); }
  }

  // Rule 5 handler: drops a TaskNotes all-day synthetic event onto a time slot.
  // Sets scheduled on the task, creates a timed calendar event, and if the estimate
  // exceeds the slot duration, creates a child task for the remainder.
  async _scheduleTaskNotesEventToTime(task, dateStr, targetHour) {
    const pad = n => String(n).padStart(2, '0');
    const scheduledDateTime = `${dateStr}T${pad(targetHour)}:00:00`;
    const slotMs = 60 * 60 * 1000; // 1-hour slot
    const estimateMs = task.timeEstimate ? task.timeEstimate * 60 * 1000 : slotMs;
    const endMs = Math.min(estimateMs, slotMs);
    const endDt = new Date(new Date(`${scheduledDateTime}`).getTime() + endMs);
    const endStr = `${dateStr}T${pad(Math.min(endDt.getHours(), 23))}:${pad(endDt.getMinutes())}:00`;

    try {
      // Update the task's scheduled field
      await this._tasknotesAPI('PUT', `/api/tasks/${encodeURIComponent(task.path)}`, {
        scheduled: scheduledDateTime
      });

      // Create linked timed calendar event
      const writableCalendars = this.getWritableCalendars();
      if (this._config.enable_event_management && writableCalendars.length > 0) {
        let calendarId;
        if (this._config.ask_calendar_on_task_drop && writableCalendars.length > 1) {
          calendarId = await this._pickCalendarForTaskDrop(writableCalendars);
          if (!calendarId) { await this._forceEventsRefresh(); return; }
        } else {
          calendarId = (this._config.task_calendar && writableCalendars.includes(this._config.task_calendar))
            ? this._config.task_calendar : writableCalendars[0];
        }
        const taskLink = `skylight-task://tasknotes/${encodeURIComponent(task.path)}`;
        await this.createEvent(calendarId, {
          summary: `[Task] ${task.summary}`,
          start: { dateTime: scheduledDateTime },
          end:   { dateTime: endStr },
          description: taskLink,
        });
      }

      // If estimate exceeds slot, create a child task for the remaining work
      if (task.timeEstimate && estimateMs > slotMs) {
        const remainingMins = Math.round((estimateMs - slotMs) / 60000);
        await this._tasknotesAPI('POST', '/api/tasks', {
          title: `${task.summary} (continued)`,
          status: 'open',
          priority: task.priority || undefined,
          timeEstimate: remainingMins,
          details: `Continuation of [[${task.path}]]. ${remainingMins} min remaining.`,
        });
      }

      if (this._sidePanelOpen) await this.fetchTasks();
      await this._forceEventsRefresh();
    } catch (e) {
      console.warn('[Skylight] TaskNotes schedule-to-time error:', e);
      this.showError(this.t('failedUpdateEvent'));
    }
  }

  async _rescheduleAllDayEvent(event, targetDate) {
    if (!event?.uid || !event?.entityId) return;
    const pad = n => String(n).padStart(2, '0');
    const startDate = `${targetDate.getFullYear()}-${pad(targetDate.getMonth() + 1)}-${pad(targetDate.getDate())}`;

    // Preserve the original duration for multi-day events.
    // HA stores all-day end as exclusive (the day after the last visible day),
    // so the span in days is simply (end - start) in ms / 86400000.
    const origStart = this.getEventStartDate(event);
    const origEndRaw = event.end?.date || event.end?.dateTime;
    const origEnd = origEndRaw ? new Date(origEndRaw.includes('T') ? origEndRaw : origEndRaw + 'T00:00:00') : null;
    const spanDays = (origStart && origEnd && origEnd > origStart)
      ? Math.max(1, Math.round((origEnd - origStart) / 86400000))
      : 1;

    const endDateObj = new Date(targetDate);
    endDateObj.setDate(endDateObj.getDate() + spanDays);
    const endDate = `${endDateObj.getFullYear()}-${pad(endDateObj.getMonth() + 1)}-${pad(endDateObj.getDate())}`;
    const eventData = {
      summary: event.summary,
      start: { date: startDate },
      end:   { date: endDate },
      location: event.location,
      description: event.description,
      rrule: event.rrule,
    };
    try {
      await this.updateEvent(event, event.entityId, eventData);
      await this._syncLinkedTaskDate(this._extractTaskLink(event.description), startDate);
      await this._forceEventsRefresh();
    } catch (e) { this.showError(this.t('failedUpdateEvent')); }
  }

  async _rescheduleEventToSameTimeOnDay(event, targetDate) {
    if (!event?.uid || !event?.entityId) return;
    const origStart = this.getEventStartDate(event);
    const origEndRaw = event.end?.dateTime || event.end?.date;
    if (!origStart || !origEndRaw) return;
    const origEnd = new Date(origEndRaw);
    const duration = origEnd - origStart;
    const newStart = new Date(targetDate);
    newStart.setHours(origStart.getHours(), origStart.getMinutes(), 0, 0);
    const newEnd = new Date(newStart.getTime() + duration);
    const pad = n => String(n).padStart(2, '0');
    const fmt = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:00`;
    const eventData = {
      summary: event.summary,
      start: { dateTime: fmt(newStart) },
      end:   { dateTime: fmt(newEnd) },
      location: event.location,
      description: event.description,
      rrule: event.rrule,
    };
    try {
      await this.updateEvent(event, event.entityId, eventData);
      const d = `${targetDate.getFullYear()}-${pad(targetDate.getMonth() + 1)}-${pad(targetDate.getDate())}`;
      await this._syncLinkedTaskDate(this._extractTaskLink(event.description), d);
      await this.updateEvents();
    } catch (e) { this.showError(this.t('failedUpdateEvent')); }
  }

  // Returns { entityId, itemId } if the description contains a task link, else null.
  _extractTaskLink(description) {
    if (!description) return null;
    const match = description.match(/(?:^|\n)skylight-task:\/\/([^/\n]+)\/([^\n]+)/);
    if (!match) return null;
    return { entityId: match[1], itemId: decodeURIComponent(match[2].trim()) };
  }

  // Update the due date on the linked task regardless of source.
  async _syncLinkedTaskDate(taskLink, newDate) {
    if (!taskLink) return;
    if (taskLink.entityId === 'tasknotes') {
      await this._tasknotesAPI('PUT', `/api/tasks/${encodeURIComponent(taskLink.itemId)}`, { due: newDate });
    } else if (this._hass) {
      await this._hass.callService('todo', 'update_item', {
        entity_id: taskLink.entityId, item: taskLink.itemId, due_date: newDate
      });
    }
  }

  // Clear due date so the task returns to the undated backlog.
  async _clearLinkedTaskDue(taskLink) {
    if (!taskLink) return;
    if (taskLink.entityId === 'tasknotes') {
      await this._tasknotesAPI('PUT', `/api/tasks/${encodeURIComponent(taskLink.itemId)}`, { due: null });
    } else if (this._hass) {
      await this._hass.callService('todo', 'update_item', {
        entity_id: taskLink.entityId, item: taskLink.itemId, due_date: null
      });
    }
  }

  // Delete the linked task entirely.
  async _deleteLinkedTask(taskLink) {
    if (!taskLink) return;
    if (taskLink.entityId === 'tasknotes') {
      await this._tasknotesAPI('DELETE', `/api/tasks/${encodeURIComponent(taskLink.itemId)}`);
    } else if (this._hass) {
      await this._hass.callService('todo', 'remove_item', {
        entity_id: taskLink.entityId, item: taskLink.itemId
      });
    }
  }

  // Returns description with the skylight-task:// line removed.
  _stripTaskLink(description) {
    if (!description) return description;
    return description.replace(/\n?skylight-task:\/\/[^\n]*/g, '').trim();
  }

  getRecurrenceWeekdayOptions() {
    return [
      { key: 'MO', label: 'Mon' },
      { key: 'TU', label: 'Tue' },
      { key: 'WE', label: 'Wed' },
      { key: 'TH', label: 'Thu' },
      { key: 'FR', label: 'Fri' },
      { key: 'SA', label: 'Sat' },
      { key: 'SU', label: 'Sun' }
    ];
  }

  buildRRuleFromInputs({ frequency, interval, untilDate, count, byDay }) {
    const parts = [`FREQ=${frequency}`];
    const parsedInterval = parseInt(interval, 10);

    if (!Number.isNaN(parsedInterval) && parsedInterval > 1) {
      parts.push(`INTERVAL=${parsedInterval}`);
    }

    if (Array.isArray(byDay) && byDay.length > 0) {
      parts.push(`BYDAY=${byDay.join(',')}`);
    }

    const parsedCount = parseInt(count, 10);
    if (!Number.isNaN(parsedCount) && parsedCount > 0) {
      parts.push(`COUNT=${parsedCount}`);
    } else if (untilDate) {
      const until = new Date(`${untilDate}T23:59:59`);
      if (!Number.isNaN(until.getTime())) {
        const compactUntil = until.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        parts.push(`UNTIL=${compactUntil}`);
      }
    }

    return parts.join(';');
  }

  parseRRule(rrule = '') {
    const parsed = {
      frequency: 'DAILY',
      interval: '1',
      count: '',
      untilDate: '',
      byDay: []
    };

    if (!rrule || typeof rrule !== 'string') {
      return parsed;
    }

    const ruleWithoutPrefix = rrule.replace(/^RRULE:/i, '');
    const segments = ruleWithoutPrefix.split(';');

    segments.forEach((segment) => {
      const [rawKey, rawValue] = segment.split('=');
      const key = (rawKey || '').toUpperCase();
      const value = (rawValue || '').trim();

      if (!key || !value) {
        return;
      }

      if (key === 'FREQ') {
        parsed.frequency = value.toUpperCase();
      } else if (key === 'INTERVAL') {
        parsed.interval = value;
      } else if (key === 'COUNT') {
        parsed.count = value;
      } else if (key === 'BYDAY') {
        parsed.byDay = value.split(',').map((day) => day.trim()).filter(Boolean);
      } else if (key === 'UNTIL') {
        const untilCompact = value.replace(/Z$/, '');
        if (/^\d{8}/.test(untilCompact)) {
          parsed.untilDate = `${untilCompact.slice(0, 4)}-${untilCompact.slice(4, 6)}-${untilCompact.slice(6, 8)}`;
        }
      }
    });

    return parsed;
  }

  getRecurrenceEndMode(recurrenceData = {}) {
    if (recurrenceData.count) return 'after';
    if (recurrenceData.untilDate) return 'on';
    return 'never';
  }

  syncRecurrenceEndInputs() {
    const selected = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
    const untilInput = this.getRootElementById('event-recurrence-until');
    const countInput = this.getRootElementById('event-recurrence-count');

    if (!untilInput || !countInput) return;

    if (selected === 'on') {
      untilInput.disabled = false;
      countInput.disabled = true;
      countInput.value = '';
    } else if (selected === 'after') {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = false;
    } else {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = true;
      countInput.value = '';
    }
  }

  setupStartEndDurationSync({ startInputId, endInputId, isDateOnly = false }) {
    const startInput = this.getRootElementById(startInputId);
    const endInput = this.getRootElementById(endInputId);
    if (!startInput || !endInput) return;

    const toDate = (value) => {
      if (!value) return null;
      return isDateOnly ? this.parseLocalDate(value) : this.parsePossiblyLocalDateTime(value);
    };

    const fromDate = (date) => {
      if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      if (isDateOnly) {
        return `${year}-${month}-${day}`;
      }
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    let durationMs = 0;
    const recalculateDuration = () => {
      const start = toDate(startInput.value);
      const end = toDate(endInput.value);
      if (!start || !end) return;
      durationMs = end.getTime() - start.getTime();
    };

    recalculateDuration();

    startInput.addEventListener('change', () => {
      const nextStart = toDate(startInput.value);
      if (!nextStart) return;
      const nextEnd = new Date(nextStart.getTime() + durationMs);
      endInput.value = fromDate(nextEnd);
    });

    endInput.addEventListener('change', recalculateDuration);
  }

  resolveTimedEventRange(startValue, endValue, fallbackDurationMs = 60 * 60 * 1000) {
    const start = this.parsePossiblyLocalDateTime(startValue);
    if (!(start instanceof Date) || Number.isNaN(start.getTime())) {
      return { start: null, end: null };
    }

    const parsedEnd = endValue ? this.parsePossiblyLocalDateTime(endValue) : null;
    if (parsedEnd instanceof Date && !Number.isNaN(parsedEnd.getTime())) {
      return { start, end: parsedEnd };
    }

    return {
      start,
      end: new Date(start.getTime() + fallbackDurationMs)
    };
  }

  showCreateEventModal(defaultDate = null, defaultTime = null) {

    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    // Set defaults
    const now = new Date();
    const startDate = defaultDate ? new Date(defaultDate) : now;
    const hasExplicitDefaultTime = defaultTime instanceof Date;
    const startTime = hasExplicitDefaultTime ? new Date(defaultTime) : new Date(startDate);

    // Round to next half hour for timed events
    if (!hasExplicitDefaultTime && (!defaultDate || defaultDate.getHours() !== 0)) {
      const minutes = startTime.getMinutes();
      if (minutes < 30) {
        startTime.setMinutes(30);
      } else {
        startTime.setHours(startTime.getHours() + 1);
        startTime.setMinutes(0);
      }
    }
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);

    // End time is 1 hour after start (for timed events)
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 1);

    // For all-day events, show same day to user (we'll add +1 when submitting)
    const endDate = new Date(startDate);

    // Format for datetime-local input
    const formatDateTimeLocal = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('createEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="create-event-form">
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${this.t('calendars')}<span class="form-required">*</span>
              </label>
              <div class="form-checkbox-grid">
                ${writableCalendars.map((entityId, index) => `
                  <label class="form-checkbox-group" style="margin: 0;">
                    <input
                      type="checkbox"
                      class="form-checkbox create-event-calendar"
                      value="${entityId}"
                      ${index === 0 ? 'checked' : ''}
                    />
                    <span class="form-checkbox-label">${this.escapeHtml(this.getCalendarName(entityId))}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${this.t('eventTitle')}<span class="form-required">*</span>
              </label>
              <input type="text" class="form-input" id="event-title" placeholder="${this.t('eventTitlePlaceholder')}" required />
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row form-inline-row-top">
              <label class="form-label">${this.t('eventOptions')}</label>
              <div class="form-checkbox-row">
                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-all-day" />
                    <label class="form-checkbox-label" for="event-all-day">${this.t('allDayEvent')}</label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-recurring" />
                    <label class="form-checkbox-label" for="event-recurring">${this.t('recurring')}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="recurring-event-fields" style="display: none;">
            <div class="form-row">
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${this.t('recurrenceFrequency')}</label>
                  <select class="form-select" id="event-recurrence-frequency">
                  <option value="DAILY">${this.t('recurrenceDaily')}</option>
                  <option value="WEEKLY">${this.t('recurrenceWeekly')}</option>
                  <option value="MONTHLY">${this.t('recurrenceMonthly')}</option>
                  <option value="YEARLY">${this.t('recurrenceYearly')}</option>
                  </select>
                </div>
              </div>
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${this.t('recurrenceEvery')}</label>
                  <input type="number" class="form-input" id="event-recurrence-interval" min="1" value="1" />
                </div>
              </div>
            </div>
            <div class="form-group" id="event-recurrence-weekdays-group" style="display: none;">
              <label class="form-label">${this.t('recurrenceWeekdays')}</label>
              <div class="form-checkbox-group" style="flex-wrap: wrap; gap: 10px;">
                ${this.getRecurrenceWeekdayOptions().map(day => `
                  <label class="form-checkbox-label" style="display:flex;align-items:center;gap:6px;">
                    <input type="checkbox" class="form-checkbox event-recurrence-weekday" value="${day.key}" />
                    <span>${day.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label recurrence-ends-label">${this.t('recurrenceEndsOn')}</label>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-never">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-never" value="never" checked />
                  <span>${this.t('recurrenceNever')}</span>
                </label>
                <div></div>
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-on">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-on" value="on" />
                  <span>${this.t('recurrenceOn')}</span>
                </label>
                <input type="date" class="form-input" id="event-recurrence-until" disabled />
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-after">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-after" value="after" />
                  <span>${this.t('recurrenceAfter')}</span>
                </label>
                <div class="recurrence-after-input">
                  <input type="number" class="form-input" id="event-recurrence-count" min="1" placeholder="13" disabled />
                  <span>${this.t('recurrenceOccurrences')}</span>
                </div>
              </div>
            </div>
          </div>

          <div id="timed-event-fields">
            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${this.t('start')}</label>
                <input type="datetime-local" class="form-input" id="event-start"
                       value="${formatDateTimeLocal(startTime)}" required />
              </div>
            </div>

            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${this.t('end')}</label>
                <input type="datetime-local" class="form-input" id="event-end"
                       value="${formatDateTimeLocal(endTime)}" />
              </div>
            </div>
          </div>

          <div id="all-day-event-fields" style="display: none;">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('startDate')}</label>
                <input type="date" class="form-input" id="event-start-date"
                       value="${formatDate(startDate)}" />
              </div>

              <div class="form-group">
                <label class="form-label">${this.t('endDate')}</label>
                <input type="date" class="form-input" id="event-end-date"
                       value="${formatDate(endDate)}" />
              </div>
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('location')}</label>
              <input type="text" class="form-input" id="event-location" placeholder="${this.t('locationPlaceholder')}" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">${this.t('description')}</label>
            <textarea class="form-textarea" id="event-description" placeholder="${this.t('descriptionPlaceholder')}"></textarea>
          </div>

          <div id="form-error" class="error-message" style="display: none;"></div>

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${this.t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${this.t('createEvent')}</button>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('show');

    // Event listeners
    const form = this.getRootElementById('create-event-form');
    const allDayCheckbox = this.getRootElementById('event-all-day');
    const recurringCheckbox = this.getRootElementById('event-recurring');
    const recurrenceFrequency = this.getRootElementById('event-recurrence-frequency');
    const timedFields = this.getRootElementById('timed-event-fields');
    const allDayFields = this.getRootElementById('all-day-event-fields');
    const recurringFields = this.getRootElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.getRootElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this._root.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.getRootElementById('form-error');

    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });

    // Close button
    this.getRootElementById('close-modal').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Cancel button
    this.getRootElementById('cancel-btn').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const selectedCalendarIds = Array.from(this._root.querySelectorAll('.create-event-calendar:checked'))
        .map((input) => input.value);
      const title = this.getRootElementById('event-title').value.trim();
      const isAllDay = this.getRootElementById('event-all-day').checked;
      const location = this.getRootElementById('event-location').value.trim();
      const description = this.getRootElementById('event-description').value.trim();

      if (selectedCalendarIds.length === 0) {
        this.showFormError(errorDiv, this.t('noWritableCalendars'));
        return;
      }

      if (!title) {
        this.showFormError(errorDiv, this.t('eventTitleRequired'));
        return;
      }

      let eventData = {
        summary: title,
        location: location || undefined,
        description: description || undefined
      };

      if (isAllDay) {
        const startDate = this.getRootElementById('event-start-date').value;
        const endDate = this.getRootElementById('event-end-date').value;

        if (!startDate || !endDate) {
          this.showFormError(errorDiv, this.t('startEndDatesRequired'));
          return;
        }

        // Validate that end date is on or after start date
        const start = this.parseLocalDate(startDate);
        const end = this.parseLocalDate(endDate);

        if (end < start) {
          this.showFormError(errorDiv, this.t('endDateBeforeStart'));
          return;
        }

        // For Home Assistant, end date is exclusive, so add 1 day
        const exclusiveEndDate = new Date(end);
        exclusiveEndDate.setDate(exclusiveEndDate.getDate() + 1);
        const exclusiveEndDateStr = this.formatLocalDate(exclusiveEndDate);

        eventData.start = { date: startDate };
        eventData.end = { date: exclusiveEndDateStr };
      } else {
        const startDateTime = this.getRootElementById('event-start').value;
        const endDateTime = this.getRootElementById('event-end').value;

        if (!startDateTime) {
          this.showFormError(errorDiv, this.t('startEndTimesRequired'));
          return;
        }

        const { start, end } = this.resolveTimedEventRange(startDateTime, endDateTime);

        if (end <= start) {
          this.showFormError(errorDiv, this.t('endTimeBeforeStart'));
          return;
        }

        eventData.start = { dateTime: start.toISOString() };
        eventData.end = { dateTime: end.toISOString() };
      }

      if (recurringCheckbox.checked) {
        const frequency = this.getRootElementById('event-recurrence-frequency').value;
        const interval = this.getRootElementById('event-recurrence-interval').value;
        const untilDateRaw = this.getRootElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.getRootElementById('event-recurrence-count').value;
        const recurrenceEndMode = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this._root.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);

        if (frequency === 'WEEKLY' && byDay.length === 0) {
          this.showFormError(errorDiv, this.t('recurrenceSelectWeekday'));
          return;
        }

        eventData.rrule = this.buildRRuleFromInputs({
          frequency,
          interval,
          untilDate,
          count: recurrenceCount,
          byDay: frequency === 'WEEKLY' ? byDay : []
        });
      }

      // Disable submit button
      const submitBtn = this.getRootElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('creating');

      try {
        await Promise.all(selectedCalendarIds.map((calendarId) => this.createEvent(calendarId, eventData)));
        this._combinedDeleteTargets = null;
        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents();
      } catch (error) {
        console.error('Failed to create event:', error);
        this.showFormError(errorDiv, error.message || this.t('failedCreateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('createEvent');
      }
    });

    // Focus on title input
    setTimeout(() => {
      this.getRootElementById('event-title')?.focus();
    }, 100);
  }

  showEditEventModal(event, startDate, endDate, isAllDay, editScope = 'this') {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    const selectedEditTargets = Array.isArray(this._combinedEditTargets) && this._combinedEditTargets.length > 0
      ? this._combinedEditTargets
      : null;
    const selectedCombinedCalendarIds = selectedEditTargets
      ? Array.from(new Set(selectedEditTargets.map(target => target.entityId))).filter((entityId) => writableCalendars.includes(entityId))
      : [];
    const visibleCalendarOptions = selectedCombinedCalendarIds.length > 0 ? selectedCombinedCalendarIds : writableCalendars;

    // Format for datetime-local input
    const formatDateTimeLocal = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    // Preserve task link through the edit — strip it from visible textarea but restore on save.
    const existingTaskLink = this._extractTaskLink(event.description);
    const taskLinkMarker = existingTaskLink
      ? `skylight-task://${existingTaskLink.entityId}/${encodeURIComponent(existingTaskLink.itemId)}`
      : '';

    const recurrenceData = this.parseRRule(event.rrule || '');
    const isRecurring = !!event.rrule;
    const isSingleOccurrenceEdit = editScope === 'this' && isRecurring;
    const recurringSelectedByDefault = isRecurring && !isSingleOccurrenceEdit;

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('editEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="edit-event-form">
          <div class="form-group">
            <label class="form-label">
              ${this.t('calendar')}<span class="form-required">*</span>
            </label>
            <select class="form-select" id="event-calendar" required ${selectedCombinedCalendarIds.length > 1 ? 'disabled' : ''}>
              ${visibleCalendarOptions.map((entityId) => `
                <option value="${entityId}" ${entityId === event.entityId ? 'selected' : ''}>
                  ${this.escapeHtml(this.getCalendarName(entityId))}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${this.t('eventTitle')}<span class="form-required">*</span>
              </label>
              <input type="text" class="form-input" id="event-title"
                     placeholder="${this.t('eventTitlePlaceholder')}"
                     value="${this.escapeHtml(event.summary || '')}" required />
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row form-inline-row-top">
              <label class="form-label">${this.t('eventOptions')}</label>
              <div class="form-checkbox-row">
                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-all-day" ${isAllDay ? 'checked' : ''} />
                    <label class="form-checkbox-label" for="event-all-day">${this.t('allDayEvent')}</label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-recurring" ${recurringSelectedByDefault ? 'checked' : ''} />
                    <label class="form-checkbox-label" for="event-recurring">${this.t('recurring')}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="recurring-event-fields" style="display: ${recurringSelectedByDefault ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${this.t('recurrenceFrequency')}</label>
                  <select class="form-select" id="event-recurrence-frequency">
                  <option value="DAILY" ${recurrenceData.frequency === 'DAILY' ? 'selected' : ''}>${this.t('recurrenceDaily')}</option>
                  <option value="WEEKLY" ${recurrenceData.frequency === 'WEEKLY' ? 'selected' : ''}>${this.t('recurrenceWeekly')}</option>
                  <option value="MONTHLY" ${recurrenceData.frequency === 'MONTHLY' ? 'selected' : ''}>${this.t('recurrenceMonthly')}</option>
                  <option value="YEARLY" ${recurrenceData.frequency === 'YEARLY' ? 'selected' : ''}>${this.t('recurrenceYearly')}</option>
                </select>
                </div>
              </div>
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${this.t('recurrenceEvery')}</label>
                  <input type="number" class="form-input" id="event-recurrence-interval" min="1" value="${this.escapeHtml(recurrenceData.interval || '1')}" />
                </div>
              </div>
            </div>
            <div class="form-group" id="event-recurrence-weekdays-group" style="display: ${recurringSelectedByDefault && recurrenceData.frequency === 'WEEKLY' ? 'block' : 'none'};">
              <label class="form-label">${this.t('recurrenceWeekdays')}</label>
              <div class="form-checkbox-group" style="flex-wrap: wrap; gap: 10px;">
                ${this.getRecurrenceWeekdayOptions().map(day => `
                  <label class="form-checkbox-label" style="display:flex;align-items:center;gap:6px;">
                    <input type="checkbox" class="form-checkbox event-recurrence-weekday" value="${day.key}" ${recurrenceData.byDay.includes(day.key) ? 'checked' : ''} />
                    <span>${day.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label recurrence-ends-label">${this.t('recurrenceEndsOn')}</label>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-never">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-never" value="never" ${this.getRecurrenceEndMode(recurrenceData) === 'never' ? 'checked' : ''} />
                  <span>${this.t('recurrenceNever')}</span>
                </label>
                <div></div>
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-on">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-on" value="on" ${this.getRecurrenceEndMode(recurrenceData) === 'on' ? 'checked' : ''} />
                  <span>${this.t('recurrenceOn')}</span>
                </label>
                <input type="date" class="form-input" id="event-recurrence-until" value="${this.escapeHtml(recurrenceData.untilDate || '')}" ${this.getRecurrenceEndMode(recurrenceData) === 'on' ? '' : 'disabled'} />
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-after">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-after" value="after" ${this.getRecurrenceEndMode(recurrenceData) === 'after' ? 'checked' : ''} />
                  <span>${this.t('recurrenceAfter')}</span>
                </label>
                <div class="recurrence-after-input">
                  <input type="number" class="form-input" id="event-recurrence-count" min="1" placeholder="13" value="${this.escapeHtml(recurrenceData.count || '')}" ${this.getRecurrenceEndMode(recurrenceData) === 'after' ? '' : 'disabled'} />
                  <span>${this.t('recurrenceOccurrences')}</span>
                </div>
              </div>
            </div>
          </div>

          <div id="timed-event-fields" style="display: ${isAllDay ? 'none' : 'block'};">
            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${this.t('start')}</label>
                <input type="datetime-local" class="form-input" id="event-start"
                       value="${formatDateTimeLocal(startDate)}" required />
              </div>
            </div>

            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${this.t('end')}</label>
                <input type="datetime-local" class="form-input" id="event-end"
                       value="${formatDateTimeLocal(endDate)}" />
              </div>
            </div>
          </div>

          <div id="all-day-event-fields" style="display: ${isAllDay ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('startDate')}</label>
                <input type="date" class="form-input" id="event-start-date"
                       value="${formatDate(startDate)}" />
              </div>

              <div class="form-group">
                <label class="form-label">${this.t('endDate')}</label>
                <input type="date" class="form-input" id="event-end-date"
                       value="${formatDate(endDate)}" />
              </div>
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('location')}</label>
              <input type="text" class="form-input" id="event-location"
                     placeholder="${this.t('locationPlaceholder')}"
                     value="${this.escapeHtml(event.location || '')}" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">${this.t('description')}</label>
            <textarea class="form-textarea" id="event-description" placeholder="${this.t('descriptionPlaceholder')}">${this.escapeHtml(this._stripTaskLink(event.description) || '')}</textarea>
            <input type="hidden" id="event-task-link-marker" value="${this.escapeHtml(taskLinkMarker)}">
          </div>

          <div id="form-error" class="error-message" style="display: none;"></div>

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${this.t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${this.t('saveChanges')}</button>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('show');

    // Event listeners
    const form = this.getRootElementById('edit-event-form');
    const allDayCheckbox = this.getRootElementById('event-all-day');
    const recurringCheckbox = this.getRootElementById('event-recurring');
    const recurrenceFrequency = this.getRootElementById('event-recurrence-frequency');
    const timedFields = this.getRootElementById('timed-event-fields');
    const allDayFields = this.getRootElementById('all-day-event-fields');
    const recurringFields = this.getRootElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.getRootElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this._root.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.getRootElementById('form-error');

    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });

    // Close button
    this.getRootElementById('close-modal').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Cancel button
    this.getRootElementById('cancel-btn').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const calendarId = this.getRootElementById('event-calendar').value;
      const title = this.getRootElementById('event-title').value.trim();
      const isAllDayChecked = this.getRootElementById('event-all-day').checked;
      const location = this.getRootElementById('event-location').value.trim();
      const visibleDescription = this.getRootElementById('event-description').value.trim();
      const savedMarker = this.getRootElementById('event-task-link-marker')?.value || '';
      const description = savedMarker
        ? (visibleDescription ? `${visibleDescription}\n${savedMarker}` : savedMarker)
        : visibleDescription;

      if (!title) {
        this.showFormError(errorDiv, this.t('eventTitleRequired'));
        return;
      }

      let eventData = {
        summary: title,
        location: location || undefined,
        description: description || undefined
      };

      if (isAllDayChecked) {
        const startDateStr = this.getRootElementById('event-start-date').value;
        const endDateStr = this.getRootElementById('event-end-date').value;

        if (!startDateStr || !endDateStr) {
          this.showFormError(errorDiv, this.t('startEndDatesRequired'));
          return;
        }

        // Validate that end date is on or after start date
        const start = this.parseLocalDate(startDateStr);
        const end = this.parseLocalDate(endDateStr);

        if (end < start) {
          this.showFormError(errorDiv, this.t('endDateBeforeStart'));
          return;
        }

        // For Home Assistant, end date is exclusive, so add 1 day
        const exclusiveEndDate = new Date(end);
        exclusiveEndDate.setDate(exclusiveEndDate.getDate() + 1);
        const exclusiveEndDateStr = this.formatLocalDate(exclusiveEndDate);

        eventData.start = { date: startDateStr };
        eventData.end = { date: exclusiveEndDateStr };
      } else {
        const startDateTime = this.getRootElementById('event-start').value;
        const endDateTime = this.getRootElementById('event-end').value;
        const existingDurationMs = Math.max(endDate.getTime() - startDate.getTime(), 60 * 1000);

        if (!startDateTime) {
          this.showFormError(errorDiv, this.t('startEndTimesRequired'));
          return;
        }

        const { start, end } = this.resolveTimedEventRange(startDateTime, endDateTime, existingDurationMs);

        if (end <= start) {
          this.showFormError(errorDiv, this.t('endTimeBeforeStart'));
          return;
        }

        eventData.start = { dateTime: start.toISOString() };
        eventData.end = { dateTime: end.toISOString() };
      }

      if (recurringCheckbox.checked) {
        const frequency = this.getRootElementById('event-recurrence-frequency').value;
        const interval = this.getRootElementById('event-recurrence-interval').value;
        const untilDateRaw = this.getRootElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.getRootElementById('event-recurrence-count').value;
        const recurrenceEndMode = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this._root.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);

        if (frequency === 'WEEKLY' && byDay.length === 0) {
          this.showFormError(errorDiv, this.t('recurrenceSelectWeekday'));
          return;
        }

        eventData.rrule = this.buildRRuleFromInputs({
          frequency,
          interval,
          untilDate,
          count: recurrenceCount,
          byDay: frequency === 'WEEKLY' ? byDay : []
        });
      }

      // Disable submit button
      const submitBtn = this.getRootElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('saving');

      try {
        const editTargets = Array.isArray(this._combinedEditTargets) && this._combinedEditTargets.length > 0
          ? this._combinedEditTargets
          : [event];

        for (const targetEvent of editTargets) {
          const targetCalendarId = (editTargets.length > 1) ? targetEvent.entityId : calendarId;
          await this.updateEvent(targetEvent, targetCalendarId, eventData, editScope);
        }

        this._combinedEditTargets = null;
        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        await this._forceEventsRefresh();
      } catch (error) {
        console.error('Failed to update event:', error);

        // Safety net: if edit was blocked by capability detection, still try create+delete.
        // Some integrations misreport update/delete support even though create+delete works.
        if (error.message === this.t('calendarNoModifyError')) {
          try {
            await this.createEvent(calendarId, eventData);
            await this.deleteEvent(event.entityId, event.uid, event.recurrence_id);
            modal.classList.remove('show');
            await this._forceEventsRefresh();
            return;
          } catch (fallbackError) {
            console.error('Safety-net create+delete fallback failed:', fallbackError);
          }
        }

        this._combinedEditTargets = null;
        this._combinedDeleteTargets = null;
        this.showFormError(errorDiv, error.message || this.t('failedUpdateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('saveChanges');
      }
    });

    // Focus on title input
    setTimeout(() => {
      this.getRootElementById('event-title')?.focus();
    }, 100);
  }

  async updateEvent(originalEvent, newCalendarId, eventData, editScope = 'this') {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const capabilities = this._calendarCapabilities[originalEvent.entityId] || {};

    // Check if we're moving to a different calendar
    const movingCalendar = newCalendarId !== originalEvent.entityId;

    if (!originalEvent.uid) {
      throw new Error(this.t('missingUidError'));
    }

    const isRecurringUpdate = !!eventData.rrule || !!originalEvent.rrule;

    const recurrenceId = (isRecurringUpdate && editScope !== 'all') ? originalEvent.recurrence_id : null;
    const recurrenceRange = (isRecurringUpdate && editScope === 'future' && originalEvent.recurrence_id) ? 'THISANDFUTURE' : null;

    if (isRecurringUpdate && !movingCalendar && this._hass.connection?.sendMessagePromise) {
      const dtstart = eventData.start.dateTime || eventData.start.date;
      const dtend = eventData.end.dateTime || eventData.end.date;

      const eventPayload = {
        summary: eventData.summary,
        dtstart,
        dtend
      };

      if (eventData.location) {
        eventPayload.location = eventData.location;
      }

      if (eventData.description) {
        eventPayload.description = eventData.description;
      }

      if (eventData.rrule) {
        eventPayload.rrule = eventData.rrule;
      }

      const wsPayload = {
        type: 'calendar/event/update',
        entity_id: originalEvent.entityId,
        uid: originalEvent.uid,
        event: eventPayload
      };

      if (recurrenceId) {
        wsPayload.recurrence_id = recurrenceId;
      }

      if (recurrenceRange) {
        wsPayload.recurrence_range = recurrenceRange;
      }

      try {
        await this._hass.connection.sendMessagePromise(wsPayload);
        return;
      } catch (error) {
        console.error('Recurring update via WebSocket failed, falling back:', error?.message || error);
      }
    }

    // If calendar supports UPDATE, we're not moving calendars, and service exists, use update service
    const hasUpdateService = !!this._hass.services?.calendar?.update_event;
    if (capabilities.canUpdate && !movingCalendar && hasUpdateService) {
      try {
        const serviceData = {
          entity_id: originalEvent.entityId,
          uid: originalEvent.uid,
          summary: eventData.summary
        };

        // Add location if provided
        if (eventData.location) {
          serviceData.location = eventData.location;
        }

        // Add description if provided
        if (eventData.description) {
          serviceData.description = eventData.description;
        }

        // Add date/time fields
        if (eventData.start.date) {
          serviceData.start_date = eventData.start.date;
          serviceData.end_date = eventData.end.date;
        } else {
          serviceData.start_date_time = eventData.start.dateTime;
          serviceData.end_date_time = eventData.end.dateTime;
        }

        if (eventData.rrule) {
          serviceData.rrule = eventData.rrule;
        }

        // Add recurrence controls for recurring event edits
        if (recurrenceId) {
          serviceData.recurrence_id = recurrenceId;
        }

        if (recurrenceRange) {
          serviceData.recurrence_range = recurrenceRange;
        }

        await this._hass.callService('calendar', 'update_event', serviceData);
        return;
      } catch (error) {
        console.error('Update service failed, trying create+delete fallback:', error.message);
        // Fall through to create+delete pattern
      }
    } else if (capabilities.canUpdate && !movingCalendar && !hasUpdateService) {
      // Some integrations advertise update support but the service is not registered.
      // Skip update call to avoid misleading "Action calendar.update_event not found" pop-ups.
      console.debug('calendar.update_event service unavailable, using create+delete fallback');
    }

    // Fallback: Create new event and then delete old one
    // This prevents data loss when create fails on calendars without UPDATE support

    try {
      // Create in destination calendar first (might be same or different)
      await this.createEvent(newCalendarId, eventData);

      // Delete from original calendar only after successful create
      await this.deleteEvent(originalEvent.entityId, originalEvent.uid, recurrenceId, recurrenceRange);
    } catch (error) {
      console.error('Create+Delete fallback failed:', error);
      throw new Error(error.message || this.t('updateEventServiceError'));
    }
  }

  async deleteEvent(calendarId, uid, recurrenceId = null, recurrenceRange = null) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    // Try WebSocket API first (works for Google Calendar and others)
    // This is the official Calendar WebSocket API that the HA Calendar UI uses
    try {
      if (this._hass.connection && this._hass.connection.sendMessagePromise && uid) {
        const payload = {
          type: 'calendar/event/delete',
          entity_id: calendarId,
          uid: uid
        };

        // Add recurrence_id if deleting a specific instance
        if (recurrenceId) {
          payload.recurrence_id = recurrenceId;
        }

        // Add recurrence_range if deleting this and future events
        if (recurrenceRange) {
          payload.recurrence_range = recurrenceRange;
        }

        await this._hass.connection.sendMessagePromise(payload);
        return; // Success via WebSocket
      }
    } catch (wsError) {
      console.log('WebSocket delete failed, trying service call:', wsError.message);
      // Fall through to service call attempt
    }

    // Fallback to service call (works for Local Calendar and some others)
    const serviceData = {
      entity_id: calendarId,
      uid: uid
    };

    // Add recurrence_id if deleting a specific instance
    if (recurrenceId) {
      serviceData.recurrence_id = recurrenceId;
    }

    // Add recurrence_range if deleting this and future events
    if (recurrenceRange) {
      serviceData.recurrence_range = recurrenceRange;
    }

    try {
      await this._hass.callService('calendar', 'delete_event', serviceData);
    } catch (error) {
      console.error('Service call delete also failed:', error);
      throw new Error(error.message || this.t('deleteEventServiceError'));
    }
  }

  async createEvent(calendarId, eventData) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const isRecurring = !!eventData.rrule;

    // Build service-style data (used by both API variants)
    const baseData = {
      entity_id: calendarId,
      summary: eventData.summary
    };

    if (eventData.location) {
      baseData.location = eventData.location;
    }

    if (eventData.description) {
      baseData.description = eventData.description;
    }

    if (eventData.start.date) {
      baseData.start_date = eventData.start.date;
      baseData.end_date = eventData.end.date;
    } else {
      baseData.start_date_time = eventData.start.dateTime;
      baseData.end_date_time = eventData.end.dateTime;
    }

    if (isRecurring) {
      baseData.rrule = eventData.rrule;

      // HA recurring event support is exposed through Calendar WebSocket API.
      // WebSocket schema expects event.dtstart / event.dtend (not start/end keys).
      const wsPayload = {
        type: 'calendar/event/create',
        entity_id: calendarId,
        event: {
          summary: baseData.summary,
          location: baseData.location,
          description: baseData.description,
          rrule: baseData.rrule,
          dtstart: eventData.start.dateTime || eventData.start.date,
          dtend: eventData.end.dateTime || eventData.end.date
        }
      };

      try {
        if (this._hass.connection?.sendMessagePromise) {
          await this._hass.connection.sendMessagePromise(wsPayload);
          return;
        }
      } catch (error) {
        console.error('WebSocket recurring create failed:', error);
        throw new Error(error?.message || this.t('createEventServiceError'));
      }

      throw new Error(this.t('createEventServiceError'));
    }

    try {
      await this._hass.callService('calendar', 'create_event', baseData);
    } catch (error) {
      console.error('Service call failed:', error);
      throw new Error(error.message || this.t('createEventServiceError'));
    }
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }


  showEditConfirmation(event, startDate, endDate, isAllDay, selectedEvents = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const isRecurring = event.rrule || event.recurrence_id;
    if (!isRecurring) {
      this._combinedEditTargets = selectedEvents;
      this.showEditEventModal(event, startDate, endDate, isAllDay, 'this');
      return;
    }

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editRecurringEventTitle')}</h3>
        <p class="confirm-message">
          ${this.t('editRecurringPrompt', { title: this.escapeHtml(event.summary || this.t('untitledEvent')) })}
        </p>

        <div class="recurring-options">
          <label class="recurring-option">
            <input type="radio" name="edit-option" value="this" checked />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
              <div class="recurring-option-description">${this.t('editThisOccurrence')}</div>
            </div>
          </label>

          ${event.recurrence_id ? `
            <label class="recurring-option">
              <input type="radio" name="edit-option" value="future" />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                <div class="recurring-option-description">${this.t('editThisOccurrenceAndFuture')}</div>
              </div>
            </label>
          ` : ''}

          <label class="recurring-option">
            <input type="radio" name="edit-option" value="all" />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('editEntireSeries')}</div>
            </div>
          </label>
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-edit-option-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-edit-option-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-edit-option-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-edit-option-btn')?.addEventListener('click', () => {
      const selectedOption = this._root.querySelector('input[name="edit-option"]:checked')?.value || 'this';
      modal.classList.remove('show');
      this._combinedEditTargets = selectedEvents;
      this.showEditEventModal(event, startDate, endDate, isAllDay, selectedOption);
    });
  }


  showCombinedEditSelectionModal(event, startDate, endDate, isAllDay) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const sourceEvents = (event.sourceEvents || []).filter(sourceEvent => !this._hiddenCalendars.has(sourceEvent.entityId));

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editEvent')}</h3>
        <p class="confirm-message">Select which calendar copies to edit.</p>

        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="checkbox" class="combined-edit-option" data-index="${index}" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-edit-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-combined-edit-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-combined-edit-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-combined-edit-btn')?.addEventListener('click', () => {
      const selectedIndexes = Array.from(this._root.querySelectorAll('.combined-edit-option:checked'))
        .map(input => Number.parseInt(input.getAttribute('data-index'), 10))
        .filter(index => Number.isInteger(index) && index >= 0 && index < sourceEvents.length);

      if (selectedIndexes.length === 0) {
        return;
      }

      const selectedEvents = selectedIndexes.map(index => sourceEvents[index]);
      modal.classList.remove('show');
      this.showEditConfirmation(selectedEvents[0], startDate, endDate, isAllDay, selectedEvents);
    });
  }


  showCombinedDeleteSelectionModal(event) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const sourceEvents = (event.sourceEvents || []).filter(sourceEvent => !this._hiddenCalendars.has(sourceEvent.entityId));

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
        <p class="confirm-message">Select which calendar copies to delete.</p>

        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="checkbox" class="combined-delete-option" data-index="${index}" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-delete-btn">${this.t('cancel')}</button>
          <button class="btn btn-danger" id="confirm-combined-delete-btn">${this.t('delete')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-combined-delete-btn')?.addEventListener('click', () => {
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-combined-delete-btn')?.addEventListener('click', () => {
      const selectedIndexes = Array.from(this._root.querySelectorAll('.combined-delete-option:checked'))
        .map(input => Number.parseInt(input.getAttribute('data-index'), 10))
        .filter(index => Number.isInteger(index) && index >= 0 && index < sourceEvents.length);

      if (selectedIndexes.length === 0) {
        return;
      }

      const selectedDeleteTargets = selectedIndexes.map(index => sourceEvents[index]);
      this._combinedDeleteTargets = selectedDeleteTargets;
      modal.classList.remove('show');
      this.showDeleteConfirmation(selectedDeleteTargets[0], selectedDeleteTargets);
    });
  }


  showDeleteConfirmation(event, selectedEvents = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    const deleteTargets = Array.isArray(selectedEvents) && selectedEvents.length > 0
      ? selectedEvents
      : (Array.isArray(this._combinedDeleteTargets) && this._combinedDeleteTargets.length > 0
          ? this._combinedDeleteTargets
          : [event]);
    const representativeEvent = deleteTargets[0] || event;

    // Check if any selected target is recurring
    const hasRecurringTargets = deleteTargets.some(target => target.rrule || target.recurrence_id);
    const hasFutureCapableTargets = deleteTargets.some(target => target.recurrence_id);
    const linkedTask = this._extractTaskLink(representativeEvent.description);
    const deleteTaskCheckbox = linkedTask ? `
      <label class="delete-task-option">
        <input type="checkbox" id="delete-linked-task"> Also delete linked task
      </label>` : '';

    if (hasRecurringTargets) {
      // Show recurring event deletion options
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteRecurringEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteRecurringPrompt', { title: this.escapeHtml(representativeEvent.summary || this.t('untitledEvent')) })}
          </p>

          <div class="recurring-options">
            <label class="recurring-option">
              <input type="radio" name="delete-option" value="this" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
                <div class="recurring-option-description">${this.t('deleteThisOccurrence')}</div>
              </div>
            </label>

            ${hasFutureCapableTargets ? `
              <label class="recurring-option">
                <input type="radio" name="delete-option" value="future" />
                <div class="recurring-option-label">
                  <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                  <div class="recurring-option-description">${this.t('deleteThisOccurrenceAndFuture')}</div>
                </div>
              </label>
            ` : ''}

            <label class="recurring-option">
              <input type="radio" name="delete-option" value="all" />
              <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('deleteEntireSeries')}</div>
              </div>
            </label>
          </div>

          ${deleteTaskCheckbox}
          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    } else {
      // Show simple confirmation for non-recurring events
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteEventConfirm', { title: this.escapeHtml(representativeEvent.summary || this.t('untitledEvent')) })}
          </p>
          ${deleteTaskCheckbox}
          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    }

    modal.classList.add('show');

    // Cancel button
    this.getRootElementById('cancel-delete-btn').addEventListener('click', () => {
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Confirm delete button
    this.getRootElementById('confirm-delete-btn').addEventListener('click', async () => {
      const deleteBtn = this.getRootElementById('confirm-delete-btn');
      deleteBtn.disabled = true;
      deleteBtn.textContent = this.t('deleting');

      try {
        if (hasRecurringTargets) {
          // Get the selected option
          const selectedOption = this._root.querySelector('input[name="delete-option"]:checked')?.value;

          for (const targetEvent of deleteTargets) {
            if (targetEvent.entityId === '_tasknotes_') continue; // handled via task link below
            const targetIsRecurring = targetEvent.rrule || targetEvent.recurrence_id;

            if (!targetIsRecurring) {
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
              continue;
            }

            if (selectedOption === 'future' && targetEvent.recurrence_id) {
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid, targetEvent.recurrence_id, 'THISANDFUTURE');
            } else if (selectedOption === 'this' && targetEvent.recurrence_id) {
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid, targetEvent.recurrence_id);
            } else if (selectedOption === 'all') {
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
            } else {
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
            }
          }
        } else {
          for (const targetEvent of deleteTargets) {
            if (targetEvent.entityId === '_tasknotes_') continue; // handled via task link below
            await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
          }
        }

        this._combinedDeleteTargets = null;

        // Delete linked task if checked; otherwise clear its due date so it returns to the backlog
        if (linkedTask) {
          try {
            if (this.getRootElementById('delete-linked-task')?.checked) {
              await this._deleteLinkedTask(linkedTask);
            } else {
              await this._clearLinkedTaskDue(linkedTask);
            }
            if (this._sidePanelOpen) await this.fetchTasks();
          } catch (taskErr) {
            console.warn('[Skylight] Failed to update linked task on event delete:', taskErr);
          }
        }

        modal.classList.remove('show');

        await this._forceEventsRefresh();
      } catch (error) {
        console.error('Failed to delete event:', error);
        this._combinedDeleteTargets = null;
        alert(error.message || this.t('failedDeleteEvent'));
        deleteBtn.disabled = false;
        deleteBtn.textContent = this.t('delete');
      }
    });
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }

  showError(message) {
    console.error(message);
    // Could add a toast notification here
  }

  setModalBackHandler(onCloseBack = null) {
    this._activeModalBackHandler = typeof onCloseBack === 'function' ? onCloseBack : null;
  }

  showEventModal(event, onCloseBack = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    let startDate, endDate, isAllDay;

    if (event.start.dateTime) {
      startDate = new Date(event.start.dateTime);
      endDate = new Date(event.end.dateTime);
      isAllDay = false;
    } else if (event.start.date) {
      // For all-day events, add T00:00:00 to prevent timezone shifts
      startDate = this.parseLocalDate(event.start.date);
      endDate = this.parseLocalDate(event.end.date);

      // End date is exclusive for all-day events, so subtract 1 day for display
      endDate.setDate(endDate.getDate() - 1);
      isAllDay = true;
    } else {
      startDate = new Date(event.start);
      endDate = new Date(event.end);
      isAllDay = !event.start.includes('T');
      // If it's an all-day event in string format, adjust end date
      if (isAllDay && event.end) {
        endDate.setDate(endDate.getDate() - 1);
      }
    }

    // Get calendar info and capabilities
    const calendarName = this.getCalendarName(event.entityId);
    const capabilities = this._calendarCapabilities[event.entityId] || {};
    const visibleBadges = this.getVisibleCalendarBadgesForEvent(event);
    const combinedBadgeHtml = event.isCombinedCalendarEvent
      ? `<div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;">${visibleBadges.map(calendar => `<span class="modal-calendar-badge" style="background: ${calendar.color}; color: white; display: inline-block; padding: 4px 10px; border-radius: 12px; font-size: 12px;">${this.escapeHtml(this.getCalendarName(calendar.entityId))}</span>`).join('')}</div>`
      : `<div class="modal-calendar-badge" style="background: ${event.color}; color: white; display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-top: 8px;">${this.escapeHtml(calendarName)}</div>`;

    // For edit/delete to work, we need:
    // 1. Event management enabled
    // 2. Calendar not read-only
    // 3. Event has a UID (required for modifications)
    const hasUID = event.uid !== undefined && event.uid !== null && event.uid !== '';
    const canModify = this._config.enable_event_management &&
                     !capabilities.isReadonly &&
                     hasUID;

    // WebSocket delete works for Google Calendar and other integrations
    const canEdit = canModify;
    const canDelete = canModify; // WebSocket delete works for all calendars including Google

    content.innerHTML = `
      <div class="modal-header">
        <div>
          <h3 class="modal-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</h3>
          ${combinedBadgeHtml}
        </div>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="modal-row">
          <div class="modal-label">📅 ${this.t('start')}</div>
          <div class="modal-value">
            ${this.formatDate(startDate)}${!isAllDay ? ` ${this.t('at')} ${this.formatTime(startDate)}` : ` (${this.t('allDay')})`}
          </div>
        </div>
        <div class="modal-row">
          <div class="modal-label">🏁 ${this.t('end')}</div>
          <div class="modal-value">
            ${this.formatDate(endDate)}${!isAllDay ? ` ${this.t('at')} ${this.formatTime(endDate)}` : ` (${this.t('allDay')})`}
          </div>
        </div>
        ${!isAllDay ? `
          <div class="modal-row">
            <div class="modal-label">⏱️ ${this.t('duration')}</div>
            <div class="modal-value">${this.formatDuration(startDate, endDate)}</div>
          </div>
        ` : ''}
        ${event.location ? `
          <div class="modal-row">
            <div class="modal-label">📍 ${this.t('location')}</div>
            <div class="modal-value">${this.escapeHtml(event.location)}</div>
          </div>
        ` : ''}
        ${event.description ? `
          <div class="modal-row">
            <div class="modal-label">📝 ${this.t('description')}</div>
            <div class="modal-value" style="white-space: pre-wrap;">${this.escapeHtml(this._stripTaskLink(event.description))}</div>
          </div>
        ` : ''}
        ${event.attendees && event.attendees.length > 0 ? `
          <div class="modal-row">
            <div class="modal-label">👥 ${this.t('attendees')}</div>
            <div class="modal-value">
              ${event.attendees.map(a => this.escapeHtml(a.email || a.displayName || this.t('unknownAttendee'))).join(', ')}
            </div>
          </div>
        ` : ''}
        ${event.rrule ? `
          <div class="modal-row">
            <div class="modal-label">🔁 ${this.t('recurrence')}</div>
            <div class="modal-value">${this.t('recurringEvent')}</div>
          </div>
        ` : ''}

        ${!canModify && !capabilities.isReadonly && capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${this.t('googleCalendarLimitationTitle')}</strong> ${this.t('googleCalendarLimitationBody')}
          </div>
        ` : ''}

        ${!canModify && !hasUID && !capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${this.t('cannotModifyTitle')}</strong> ${this.t('cannotModifyBody')}
          </div>
        ` : ''}

        ${(canEdit || canDelete) ? `
          <div class="modal-actions">
            <div class="modal-actions-left">
              ${canDelete ? `<button class="btn btn-danger" id="delete-event-btn">${this.t('delete')}</button>` : ''}
            </div>
            <div class="modal-actions-right">
              ${canEdit ? `<button class="btn btn-primary" id="edit-event-btn">${this.t('editEvent')}</button>` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    modal.classList.add('show');
    this.setModalBackHandler(onCloseBack);

    // Close button
    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      if (this._activeModalBackHandler) {
        const backHandler = this._activeModalBackHandler;
        this._activeModalBackHandler = null;
        backHandler();
      } else {
        modal.classList.remove('show');
      }
    });

    // Edit button
    this.getRootElementById('edit-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents) && event.sourceEvents.length > 1) {
        this.showCombinedEditSelectionModal(event, startDate, endDate, isAllDay);
        return;
      }
      this.showEditConfirmation(event, startDate, endDate, isAllDay);
    });

    // Delete button
    this.getRootElementById('delete-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents) && event.sourceEvents.length > 1) {
        this.showCombinedDeleteSelectionModal(event);
        return;
      }
      this.showDeleteConfirmation(event);
    });
  }

  showDayCompactModal(date, events) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="week-compact-container single-day-modal">
          <div class="week-day-column">
            <div class="week-day-header">
              <div class="week-day-name">${this.getWeekdayNames('short')[date.getDay()]}</div>
              <div class="week-day-date">${date.getDate()}</div>
            </div>
            ${sortedEvents.length > 0 ? sortedEvents.map(event => {
              const daySegment = this.getEventDaySegment(event, date);
              if (!daySegment) return '';
              const { segmentStart, isAllDaySegment } = daySegment;
              const timeLabel = isAllDaySegment ? this.t('allDay') : this.formatTime(segmentStart);
              return `
                <div class="week-compact-event" style="background: ${event.color}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-location-font-size: ${this.getEventLocationFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                  <div class="week-compact-event-time">${timeLabel}</div>
                  <div class="week-compact-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
                  ${this.shouldShowEventLocation(event) ? `<div class="week-compact-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
                </div>
              `;
            }).join('') : `<div class="empty-state-subtext">${this.t('noEvents')}</div>`}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
    });

    this._root.querySelectorAll('.week-compact-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData, () => this.showDayCompactModal(date, events));
      });
    });
  }

  showDayModal(date, events) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        ${sortedEvents.map(event => {
          const daySegment = this.getEventDaySegment(event, date);
          if (!daySegment) return '';

          const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;

          return `
            <div class="day-event day-modal-event" style="background: ${this.colorWithAlpha(event.color, 0.08)}; border-left: 4px solid ${event.color};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="day-modal-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
              <div class="day-modal-event-meta">
                ${isAllDaySegment ? this.t('allDay') : `${this.formatTime(segmentStart)} - ${this.formatTime(segmentEnd)}`}
              </div>
              ${event.location ? `<div class="day-modal-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
    });

    this._root.querySelectorAll('.day-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData);
      });
    });
  }

  getMonthName(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'long' });
    return formatter.format(new Date(2020, month, 1));
  }

  getMonthNameShort(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'short' });
    return formatter.format(new Date(2020, month, 1));
  }

  formatTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), { hour: 'numeric', minute: '2-digit' }).format(date);
  }

  formatDate(date) {
    return new Intl.DateTimeFormat(this.getLocale(), { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  }

  formatDuration(startDate, endDate) {
    const diffMs = endDate - startDate;
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;

    const parts = [];
    if (hours > 0) {
      parts.push(this.t(hours === 1 ? 'durationHour' : 'durationHours', { count: hours }));
    }
    if (minutes > 0) {
      parts.push(this.t(minutes === 1 ? 'durationMinute' : 'durationMinutes', { count: minutes }));
    }
    if (parts.length === 0) {
      return this.t('durationMinutes', { count: 0 });
    }
    return parts.join(' ');
  }

  getCalendarName(entityId) {
    // Check if there's a custom name mapping
    if (this._config.calendar_names && this._config.calendar_names[entityId]) {
      return this._config.calendar_names[entityId];
    }

    // Otherwise use friendly_name from entity or entity ID
    const entity = this._hass?.states[entityId];
    return entity?.attributes?.friendly_name || entityId.split('.')[1];
  }

  getCalendarBadgeIcon(entityId) {
    const configured = this._config.calendar_badge_icons?.[entityId];
    if (!configured) return null;
    return String(configured).trim() || null;
  }

  renderCalendarBadgeIcon(entityId, name, color, isHidden) {
    const configuredBadgeIcon = this.getCalendarBadgeIcon(entityId);
    const iconBackground = isHidden ? '#9ca3af' : this.normalizeSingleColor(color);

    if (configuredBadgeIcon && configuredBadgeIcon.startsWith('mdi:')) {
      return `<div class="calendar-badge-icon" style="background: ${iconBackground}"><ha-icon icon="${this.escapeHtml(configuredBadgeIcon)}"></ha-icon></div>`;
    }

    if (configuredBadgeIcon) {
      const normalizedUrl = this.normalizeBackgroundImageUrl(configuredBadgeIcon) || configuredBadgeIcon;
      return `<div class="calendar-badge-icon calendar-badge-photo" style="background: ${iconBackground}"><img src="${this.escapeHtml(normalizedUrl)}" alt="${this.escapeHtml(name)}" loading="lazy"></div>`;
    }

    const initial = name.charAt(0).toUpperCase();
    return `<div class="calendar-badge-icon" style="background: ${iconBackground}">${this.escapeHtml(initial)}</div>`;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  normalizeBackgroundImageUrl(url) {
    if (!url) return null;

    const value = String(url).trim();
    if (!value) return null;

    const mediaSourcePrefix = 'media-source://media_source/local/';
    if (value.startsWith(mediaSourcePrefix)) {
      const localPath = value.slice(mediaSourcePrefix.length);
      return `/media/local/${localPath}`;
    }

    return value;
  }

  normalizeBackgroundOpacity(opacityValue, fallback = 0) {
    const numericOpacity = Number(opacityValue);
    if (!Number.isFinite(numericOpacity)) {
      return fallback;
    }

    return Math.min(100, Math.max(0, numericOpacity));
  }

  static getStubConfig() {
    return {
      title: 'Family Calendar',
      entities: ['calendar.personal'],
      default_view: 'month',
      first_day_of_week: 0,
      week_days: [0, 1, 2, 3, 4, 5, 6],
      week_start_hour: 0,
      week_end_hour: 23,
      lock_schedule_hours: false,
      show_all_events_month: false,
      compact_width: false,
      show_current_time_bar: false,
      show_event_location: false,
      event_location_font_size: 9,
      background_opacity: 0,
      event_calendar_friendly_name: false,
      combine_style: 'bars',
      combine_background: 'primary',
      hide_calendars: false,
      hide_controls: false,
      hide_dark_mode_toggle: false,
      color_scheme: 'auto',
      enable_event_management: true
    };
  }

  getCardSize() {
    return 6;
  }

  static async getConfigElement() {
    return document.createElement('skylight-calendar-card-dev-editor');
  }
}

class SkylightCalendarCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = SkylightCalendarCard.getStubConfig();
    this._hass = null;
    this._rendered = false;
    this._lastCalendarEntitiesKey = '';
    this._colorPickerState = {
      open: false,
      field: null,
      mapKey: null,
      h: 0,
      s: 1,
      v: 1,
      color: '#3f51b5'
    };
    this._combineBackgroundMode = 'primary';
    this._combineBackgroundHexDraft = '';
    this._openDisclosureKeys = new Set();
  }

  normalizeHexColor(colorValue) {
    const normalizedColor = String(colorValue || '').trim();
    if (!normalizedColor) return null;

    const hex3Match = normalizedColor.match(/^#([\da-fA-F]{3})$/);
    if (hex3Match) {
      const [r, g, b] = hex3Match[1].split('');
      return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
    }

    const hex6Match = normalizedColor.match(/^#([\da-fA-F]{6})$/);
    if (hex6Match) {
      return `#${hex6Match[1].toUpperCase()}`;
    }

    return null;
  }

  normalizeBackgroundOpacity(opacityValue, fallback = 0) {
    const numericOpacity = Number(opacityValue);
    if (!Number.isFinite(numericOpacity)) {
      return fallback;
    }

    return Math.min(100, Math.max(0, numericOpacity));
  }

  syncCombineBackgroundEditorState(backgroundValue) {
    const rawValue = String(backgroundValue || '').trim();
    const normalizedLower = rawValue.toLowerCase();
    if (normalizedLower === 'neutral' || normalizedLower === 'primary') {
      this._combineBackgroundMode = normalizedLower;
      this._combineBackgroundHexDraft = '';
      return;
    }

    const normalizedHex = this.normalizeHexColor(rawValue);
    if (normalizedHex) {
      this._combineBackgroundMode = 'hex';
      this._combineBackgroundHexDraft = normalizedHex;
      return;
    }

    this._combineBackgroundMode = 'primary';
    this._combineBackgroundHexDraft = '';
  }

  setConfig(config) {
    const previousEntities = Array.isArray(this._config?.entities) ? this._config.entities : [];
    const normalizedDefaultView = config.default_view === 'week'
      ? 'week-compact'
      : config.default_view === 'schedule'
        ? 'week-standard'
        : config.default_view;

    this._config = {
      ...SkylightCalendarCard.getStubConfig(),
      ...config,
      default_view: normalizedDefaultView || (SkylightCalendarCard.getStubConfig().default_view || 'month'),
      color_scheme: SkylightCalendarCard.prototype.normalizeDefaultDarkMode(config.color_scheme)
    };
    this.syncCombineBackgroundEditorState(this._config.combine_background);

    if (!this._rendered) {
      this.render();
      return;
    }

    const nextEntities = Array.isArray(this._config.entities) ? this._config.entities : [];
    const entitiesChanged = previousEntities.join('|') !== nextEntities.join('|');

    if (entitiesChanged) {
      this.render();
      return;
    }

    this.updateFieldValues();
  }

  set hass(hass) {
    this._hass = hass;

    if (!this._rendered) {
      this.render();
      return;
    }

    this.refreshCalendarEntities();
  }

  get value() {
    return this._config || SkylightCalendarCard.getStubConfig();
  }

  getCalendarEntities() {
    return Object.keys(this._hass?.states || {})
      .filter((entityId) => entityId.startsWith('calendar.'))
      .sort();
  }

  getTodoEntities() {
    return Object.keys(this._hass?.states || {})
      .filter((entityId) => entityId.startsWith('todo.'))
      .sort();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  normalizeDefaultViewForEditor(value) {
    if (value === 'week') return 'week-compact';
    if (value === 'schedule') return 'week-standard';
    return value || 'month';
  }

  getEventCalendarBubbleMode() {
    if (this._config.event_calendar_friendly_name) {
      return 'friendly_name';
    }

    if (this._config.hide_event_calendar_bubble) {
      return 'none';
    }

    return 'icon';
  }

  getMapFieldValue(key) {
    const value = this._config[key];
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }

  getListFieldValue(key) {
    const value = this._config[key];
    return Array.isArray(value) ? value : [];
  }

  getListInputValue(key) {
    return this.getListFieldValue(key).join(', ');
  }


  getEditorDefaultValue(key) {
    const defaults = {
      week_start_hour: 0,
      week_end_hour: 23,
      lock_schedule_hours: false,
      height_scale: 1,
      event_font_size: 11,
      event_time_font_size: 9,
      event_location_font_size: 9,
      combine_calendars_width: 18,
      max_events: 0,
      first_day_of_week: 0,
      background_opacity: 0
    };
    return Object.prototype.hasOwnProperty.call(defaults, key) ? defaults[key] : 0;
  }

  getConfiguredEntitiesForEditor() {
    const entities = Array.isArray(this._config.entities) ? this._config.entities : [];
    return entities.filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'));
  }

  getEntityFriendlyName(entityId) {
    return this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
  }

  toColorInputValue(value, fallback = '#3f51b5') {
    const normalized = String(value || '').trim();
    if (/^#[0-9a-fA-F]{6}$/.test(normalized)) {
      return normalized;
    }
    return fallback;
  }

  hexToHsv(hex) {
    const normalizedHex = this.toColorInputValue(hex).replace('#', '');
    const r = parseInt(normalizedHex.slice(0, 2), 16) / 255;
    const g = parseInt(normalizedHex.slice(2, 4), 16) / 255;
    const b = parseInt(normalizedHex.slice(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
      if (max === r) h = ((g - b) / delta) % 6;
      else if (max === g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;
      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }

    const s = max === 0 ? 0 : delta / max;
    const v = max;
    return { h, s, v };
  }

  hsvToHex(h, s, v) {
    const hue = ((h % 360) + 360) % 360;
    const sat = Math.max(0, Math.min(1, s));
    const val = Math.max(0, Math.min(1, v));

    const c = val * sat;
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = val - c;

    let r = 0;
    let g = 0;
    let b = 0;

    if (hue < 60) [r, g, b] = [c, x, 0];
    else if (hue < 120) [r, g, b] = [x, c, 0];
    else if (hue < 180) [r, g, b] = [0, c, x];
    else if (hue < 240) [r, g, b] = [0, x, c];
    else if (hue < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];

    const toHex = (n) => Math.round((n + m) * 255).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  getColorValue(field, mapKey = null) {
    if (mapKey) {
      return this.toColorInputValue(this.getMapFieldValue(field)[mapKey]);
    }
    return this.toColorInputValue(this._config[field]);
  }

  emitConfigChanged(nextConfig) {
    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }

  openColorPicker(field, mapKey = null) {
    const initialColor = this.getColorValue(field, mapKey);
    const hsv = this.hexToHsv(initialColor);
    this._colorPickerState = {
      open: true,
      field,
      mapKey,
      h: hsv.h,
      s: hsv.s,
      v: hsv.v,
      color: initialColor
    };

    const dialog = this.querySelector('.color-picker-dialog');
    if (dialog) {
      dialog.classList.add('show');
      this.syncColorPickerUi();
    }
  }

  closeColorPicker() {
    this._colorPickerState.open = false;
    const dialog = this.querySelector('.color-picker-dialog');
    if (dialog) dialog.classList.remove('show');
  }

  syncColorPickerUi() {
    const dialog = this.querySelector('.color-picker-dialog');
    if (!dialog) return;

    const { h, s, v, color } = this._colorPickerState;
    const marker = dialog.querySelector('.color-picker-wheel-marker');
    const brightnessInput = dialog.querySelector('#color-picker-brightness');
    const hexInput = dialog.querySelector('#color-picker-hex');
    const preview = dialog.querySelector('.color-picker-preview');
    const valueText = dialog.querySelector('.color-picker-value');

    if (marker) {
      const radius = 120;
      const angle = ((h - 90) * Math.PI) / 180;
      const markerRadius = s * radius;
      const x = Math.cos(angle) * markerRadius;
      const y = Math.sin(angle) * markerRadius;
      marker.style.left = `calc(50% + ${x}px)`;
      marker.style.top = `calc(50% + ${y}px)`;
    }

    if (brightnessInput) brightnessInput.value = String(Math.round(v * 100));
    if (hexInput && document.activeElement !== hexInput) hexInput.value = color;
    if (preview) preview.style.background = color;
    if (valueText) valueText.textContent = color;
  }

  updateColorPickerFromWheelEvent(event) {
    const wheel = event.currentTarget;
    const rect = wheel.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const radius = rect.width / 2;
    const distance = Math.min(Math.sqrt(x * x + y * y), radius);
    const saturation = distance / radius;
    const hue = (Math.atan2(y, x) * 180) / Math.PI + 90;

    this._colorPickerState.h = hue < 0 ? hue + 360 : hue;
    this._colorPickerState.s = saturation;
    this._colorPickerState.color = this.hsvToHex(this._colorPickerState.h, this._colorPickerState.s, this._colorPickerState.v);
    this.syncColorPickerUi();
  }

  applyColorPickerColor(hexColor) {
    const { field, mapKey } = this._colorPickerState;
    if (!field) return;

    const nextConfig = { ...this.value };
    if (mapKey) {
      nextConfig[field] = {
        ...this.getMapFieldValue(field),
        [mapKey]: hexColor
      };
    } else {
      nextConfig[field] = hexColor;
    }

    this.emitConfigChanged(nextConfig);
    this.updateFieldValues();
    this.closeColorPicker();
  }

  normalizeHexColorInput(value) {
    const raw = String(value || '').trim();
    if (!raw) return null;
    const withHash = raw.startsWith('#') ? raw : `#${raw}`;
    return /^#[0-9a-fA-F]{6}$/.test(withHash) ? withHash.toLowerCase() : null;
  }

  renderColorPickerDialog() {
    return `
      <div class="color-picker-dialog">
        <div class="color-picker-overlay" data-close-color-picker="true"></div>
        <div class="color-picker-modal" role="dialog" aria-label="Select color">
          <div class="color-picker-title">Select color</div>
          <div class="color-picker-wheel" id="color-picker-wheel">
            <div class="color-picker-wheel-marker"></div>
          </div>
          <div class="color-picker-controls">
            <label for="color-picker-brightness">Color brightness</label>
            <input id="color-picker-brightness" type="range" min="5" max="100" step="1">
          </div>
          <div class="color-picker-controls">
            <label for="color-picker-hex">Hex color</label>
            <input id="color-picker-hex" type="text" placeholder="#3f51b5">
          </div>
          <div class="color-picker-presets">
            ${['#ffffff', '#ff0000', '#ffff00', '#00ff00', '#000000', '#00ffff', '#0000ff', '#ff00ff']
              .map((color) => `<button type="button" class="color-preset" data-color-preset="${color}" style="background:${color}"></button>`)
              .join('')}
          </div>
          <div class="color-picker-selected-row">
            <span>Chosen color</span>
            <span class="color-picker-preview"></span>
            <span class="color-picker-value"></span>
          </div>
          <div class="color-picker-actions">
            <button type="button" data-close-color-picker="true">Cancel</button>
            <button type="button" class="primary" id="apply-color-picker">Set</button>
          </div>
        </div>
      </div>
    `;
  }

  renderColorInputControl({ id, field, mapKey = null, value }) {
    const colorValue = this.toColorInputValue(value);
    const triggerAttributes = mapKey
      ? `data-color-trigger="true" data-color-field="${field}" data-color-map-key="${mapKey}"`
      : `data-color-trigger="true" data-color-field="${field}"`;

    return `
      <div class="color-picker-wrap">
        <button id="${id}" class="selected-color-swatch" data-color-field="${field}" ${mapKey ? `data-color-map-key="${mapKey}"` : ''} ${triggerAttributes} style="--selected-color: ${colorValue};" title="Choose color" type="button"></button>
      </div>
    `;
  }

  renderMapRowInputs(mapKey, { label, inputType = 'text', placeholder = '' } = {}) {
    const mapValue = this.getMapFieldValue(mapKey);
    const entities = this.getConfiguredEntitiesForEditor();

    if (!entities.length) {
      return `<p class="helper">Select at least one calendar to configure ${label || mapKey}.</p>`;
    }

    return entities
      .map((entityId) => {
        const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
        const value = mapValue[entityId] || '';
        if (inputType === 'color') {
          return `
            <div class="map-row">
              <label class="map-label" for="${mapKey}-${entityId}">${displayName}</label>
              ${this.renderColorInputControl({ id: `${mapKey}-${entityId}`, field: mapKey, mapKey: entityId, value })}
            </div>
          `;
        }

        return `
          <div class="map-row">
            <label class="map-label" for="${mapKey}-${entityId}">${displayName}</label>
            <input id="${mapKey}-${entityId}" type="text" data-map-field="${mapKey}" data-map-key="${entityId}" value="${this.escapeHtml(value)}" placeholder="${placeholder}">
          </div>
        `;
      })
      .join('');
  }

  renderCalendarListCheckboxes(field, { label }) {
    const entities = this.getConfiguredEntitiesForEditor();
    const selectedValues = new Set(this.getListFieldValue(field));

    if (!entities.length) {
      return `<p class="helper">Select at least one calendar to configure ${label || field}.</p>`;
    }

    return entities
      .map((entityId) => {
        const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
        const checked = selectedValues.has(entityId) ? 'checked' : '';
        return `
          <label class="list-checkbox-row">
            <span>${displayName}</span>
            <input type="checkbox" data-list-field="${field}" value="${entityId}" ${checked}>
          </label>
        `;
      })
      .join('');
  }

  buildDisclosureKey(scope, title) {
    return `${scope}:${title}`;
  }

  captureOpenDisclosures() {
    const openKeys = new Set();
    this.querySelectorAll('details[data-disclosure-key][open]').forEach((detail) => {
      const key = detail.dataset.disclosureKey;
      if (key) openKeys.add(key);
    });
    this._openDisclosureKeys = openKeys;
  }

  renderSection(title, content) {
    const disclosureKey = this.buildDisclosureKey('section', title);
    const openAttr = this._openDisclosureKeys.has(disclosureKey) ? 'open' : '';
    return `
      <details class="config-section" data-disclosure-key="${disclosureKey}" ${openAttr}>
        <summary>${title}</summary>
        <div class="section-content">${content}</div>
      </details>
    `;
  }

  renderSubSection(title, content) {
    const disclosureKey = this.buildDisclosureKey('subsection', title);
    const openAttr = this._openDisclosureKeys.has(disclosureKey) ? 'open' : '';
    return `
      <details class="config-subsection" data-disclosure-key="${disclosureKey}" ${openAttr}>
        <summary>${title}</summary>
        <div class="subsection-content">${content}</div>
      </details>
    `;
  }

  renderWeekdayCheckboxes() {
    const selectedWeekdays = new Set(this.getListFieldValue('week_days'));
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return `
      <div class="weekday-grid" role="group" aria-label="Week days">
        ${days.map((day) => `<span class="weekday-label">${day}</span>`).join('')}
        ${days.map((_, index) => `
          <label class="weekday-checkbox-wrap" aria-label="${days[index]}">
            <input type="checkbox" data-weekday="${index}" ${selectedWeekdays.has(index) ? 'checked' : ''}>
          </label>
        `).join('')}
      </div>
    `;
  }

  render() {
    this.captureOpenDisclosures();

    const displayLayoutSection = this.renderSection('Display & layout', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="first_day_of_week">First day of week</label>
          <select id="first_day_of_week" data-field="first_day_of_week" data-type="number">
            <option value="0" ${Number(this._config.first_day_of_week) === 0 ? 'selected' : ''}>Sunday</option>
            <option value="1" ${Number(this._config.first_day_of_week) === 1 ? 'selected' : ''}>Monday</option>
            <option value="2" ${Number(this._config.first_day_of_week) === 2 ? 'selected' : ''}>Tuesday</option>
            <option value="3" ${Number(this._config.first_day_of_week) === 3 ? 'selected' : ''}>Wednesday</option>
            <option value="4" ${Number(this._config.first_day_of_week) === 4 ? 'selected' : ''}>Thursday</option>
            <option value="5" ${Number(this._config.first_day_of_week) === 5 ? 'selected' : ''}>Friday</option>
            <option value="6" ${Number(this._config.first_day_of_week) === 6 ? 'selected' : ''}>Saturday</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label>Week days</label>
        ${this.renderWeekdayCheckboxes()}
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_start_hour">Week start hour</label>
          <input id="week_start_hour" data-field="week_start_hour" data-type="number" type="number" min="0" max="23" value="${Number(this._config.week_start_hour ?? this.getEditorDefaultValue('week_start_hour'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_end_hour">Week end hour</label>
          <input id="week_end_hour" data-field="week_end_hour" data-type="number" type="number" min="0" max="23" value="${Number(this._config.week_end_hour ?? this.getEditorDefaultValue('week_end_hour'))}">
        </div>
      </div>
      <div class="boolean-list">
        <label><input type="checkbox" data-field="lock_schedule_hours" ${this._config.lock_schedule_hours ? 'checked' : ''}> Schedule view: lock week start/end hours</label>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_week_compact">Rolling days (week view)</label>
          <input id="rolling_days_week_compact" data-field="rolling_days_week_compact" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_week_compact ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_schedule">Rolling days (schedule view)</label>
          <input id="rolling_days_schedule" data-field="rolling_days_schedule" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_schedule ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_weeks">Rolling weeks (month view)</label>
          <input id="rolling_weeks" data-field="rolling_weeks" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_weeks ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="boolean-list">
        <label><input type="checkbox" data-field="compact_height" ${this._config.compact_height ? 'checked' : ''}> Compact height</label>
        <label><input type="checkbox" data-field="compact_width" ${this._config.compact_width ? 'checked' : ''}> Schedule view: compact width columns</label>
        <label><input type="checkbox" data-field="show_all_events_month" ${this._config.show_all_events_month ? 'checked' : ''}> Month view: show all events (override compact height)</label>
        <label><input type="checkbox" data-field="compact_header" ${this._config.compact_header ? 'checked' : ''}> Compact header</label>
        <label><input type="checkbox" data-field="hide_calendars" ${this._config.hide_calendars ? 'checked' : ''}> Hide calendar badges</label>
        <label><input type="checkbox" data-field="hide_controls" ${this._config.hide_controls ? 'checked' : ''}> Hide header controls</label>
      </div>
      ${this._config.compact_height ? '' : `
        <div class="field">
          <label for="height_scale">Height scale</label>
          <input id="height_scale" data-field="height_scale" data-type="number" type="number" min="0.1" step="0.1" value="${Number(this._config.height_scale ?? this.getEditorDefaultValue('height_scale'))}">
        </div>
      `}
    `);

    const colorStylingSection = this.renderSection('Colors & styling', `
      <div class="field">
        <label for="header_color">Header color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'header_color', field: 'header_color', value: this._config.header_color })}
          <input data-field="header_color_text" data-type="color-text" type="text" value="${this.escapeHtml(this._config.header_color || '')}" placeholder="var(--primary-color)">
        </div>
      </div>
      <div class="field">
        <label for="header_text_color">Header text color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'header_text_color', field: 'header_text_color', value: this._config.header_text_color })}
          <input data-field="header_text_color_text" data-type="header-text-color-text" type="text" value="${this.escapeHtml(this._config.header_text_color || '')}" placeholder="Auto contrast">
        </div>
      </div>
      ${this.renderSubSection('Calendar colors', `<div class="map-grid">${this.renderMapRowInputs('colors', { label: 'calendar colors', inputType: 'color' })}</div>`)}
      ${this.renderSubSection('Event font colors', `<div class="map-grid">${this.renderMapRowInputs('event_font_colors', { label: 'event font colors', inputType: 'color' })}</div>`)}
      ${this.renderSubSection('Calendar display names', `<div class="map-grid">${this.renderMapRowInputs('calendar_names', { label: 'calendar names', placeholder: 'Display name' })}</div>`)}
      ${this.renderSubSection('Calendar badge icons', `<div class="map-grid">${this.renderMapRowInputs('calendar_badge_icons', { label: 'badge icons', placeholder: 'mdi:icon or URL' })}</div>`)}
      <div class="boolean-list">
        <label><input type="checkbox" data-field="background_transparent" ${this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0) >= 100 ? 'checked' : ''}> Transparent background surfaces</label>
        <label><input type="checkbox" data-field="hide_dark_mode_toggle" ${this._config.hide_dark_mode_toggle ? 'checked' : ''}> Hide dark mode toggle</label>
      </div>
      <div class="field">
        <label for="color_scheme">Color scheme</label>
        <select id="color_scheme" data-field="color_scheme">
          <option value="auto">Auto (browser/app)</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    `);

    const backgroundSection = this.renderSection('Background image', `
      <div class="field field-inline">
        <label for="background_opacity">Background opacity</label>
        <input id="background_opacity" data-field="background_opacity" data-type="number" type="number" min="0" max="100" step="1" value="${Number(this.normalizeBackgroundOpacity(this._config.background_opacity, this._config.background_transparent ? 100 : 0))}">
      </div>
      <div class="field field-inline">
        <label for="background_image_url">Background image URL</label>
        <input id="background_image_url" data-field="background_image_url" type="text" value="${this._config.background_image_url || ''}" placeholder="https://... or /media/local/...">
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="background_image_size">Image size</label>
          <input id="background_image_size" data-field="background_image_size" type="text" value="${this._config.background_image_size || 'cover'}" placeholder="cover">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="background_image_position">Image position</label>
          <input id="background_image_position" data-field="background_image_position" type="text" value="${this._config.background_image_position || 'center'}" placeholder="center">
        </div>
      </div>
      <div class="field field-inline">
        <label for="background_image_repeat">Image repeat</label>
        <input id="background_image_repeat" data-field="background_image_repeat" type="text" value="${this._config.background_image_repeat || 'no-repeat'}" placeholder="no-repeat">
      </div>
    `);

    const eventSection = this.renderSection('Events & schedule', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="max_events">Max events (0 = unlimited)</label>
          <input id="max_events" data-field="max_events" data-type="number" type="number" min="0" value="${Number(this._config.max_events ?? this._config.maxEvents ?? this.getEditorDefaultValue('max_events'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_font_size">Event font size</label>
          <input id="event_font_size" data-field="event_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_font_size ?? this.getEditorDefaultValue('event_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_time_font_size">Event time font size</label>
          <input id="event_time_font_size" data-field="event_time_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_time_font_size ?? this.getEditorDefaultValue('event_time_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_location_font_size">Event location font size</label>
          <input id="event_location_font_size" data-field="event_location_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_location_font_size ?? this.getEditorDefaultValue('event_location_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_calendar_bubble_mode">Event calendar bubble</label>
          <select id="event_calendar_bubble_mode" data-field="event_calendar_bubble_mode">
            <option value="icon" ${this.getEventCalendarBubbleMode() === 'icon' ? 'selected' : ''}>Icon</option>
            <option value="friendly_name" ${this.getEventCalendarBubbleMode() === 'friendly_name' ? 'selected' : ''}>Friendly Name</option>
            <option value="none" ${this.getEventCalendarBubbleMode() === 'none' ? 'selected' : ''}>None</option>
          </select>
        </div>
      </div>
      ${this.renderSubSection('Hide times for calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('hide_times_for_calendars', { label: 'hidden times calendars' })}</div>`)}
      <div class="boolean-list">
        <label><input type="checkbox" data-field="show_current_time_bar" ${this._config.show_current_time_bar ? 'checked' : ''}> Show current time bar</label>
        <label><input type="checkbox" data-field="use_24hr_schedule" ${this._config.use_24hr_schedule ? 'checked' : ''}> Use 24-hour schedule time</label>
        <label><input type="checkbox" data-field="show_event_location" ${this._config.show_event_location ? 'checked' : ''}> Show event location</label>
        <label><input type="checkbox" data-field="combine_calendars" ${this._config.combine_calendars ? 'checked' : ''}> Combine duplicate events across calendars</label>
      </div>
      ${this._config.combine_calendars ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_style">Combined indicator style</label>
          <select id="combine_style" data-field="combine_style">
            <option value="stripes" ${this._config.combine_style === 'stripes' ? 'selected' : ''}>Stripes</option>
            <option value="bars" ${this._config.combine_style === 'bars' || !this._config.combine_style ? 'selected' : ''}>Bars</option>
            <option value="dots" ${this._config.combine_style === 'dots' ? 'selected' : ''}>Dots</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_background_mode">Combined background</label>
          <select id="combine_background_mode" data-field="combine_background_mode">
            <option value="neutral" ${this._combineBackgroundMode === 'neutral' ? 'selected' : ''}>Neutral</option>
            <option value="primary" ${this._combineBackgroundMode === 'primary' ? 'selected' : ''}>Primary</option>
            <option value="hex" ${this._combineBackgroundMode === 'hex' ? 'selected' : ''}>Hex</option>
          </select>
        </div>
      </div>
      ${this._combineBackgroundMode === 'hex' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_background_hex">Combined background hex value</label>
          <input id="combine_background_hex" data-field="combine_background_hex" type="text" value="${this.escapeHtml(this._combineBackgroundHexDraft || '#FFFFFF')}" placeholder="#RRGGBB">
        </div>
      </div>
      ` : ''}
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_calendars_width">Combined indicator width (px)</label>
          <input id="combine_calendars_width" data-field="combine_calendars_width" data-type="number" type="number" min="1" value="${Number(this._config.combine_calendars_width ?? this.getEditorDefaultValue('combine_calendars_width'))}">
        </div>
      </div>
      ` : ''}
    `);

    const taskSource = this._config.task_source || 'none';
    const todoEntities = this.getTodoEntities();
    const selectedTaskEntities = new Set(this.getListFieldValue('task_entities'));
    const taskEntityRows = todoEntities.length
      ? todoEntities.map(entityId => {
          const name = this.escapeHtml(this.getEntityFriendlyName(entityId));
          const checked = selectedTaskEntities.has(entityId) ? 'checked' : '';
          return `<label class="list-checkbox-row"><span>${name}</span><input type="checkbox" data-list-field="task_entities" value="${entityId}" ${checked}></label>`;
        }).join('')
      : `<p class="helper">No To-do entities found in Home Assistant.</p>`;
    const calendarSelectOptions = `
      <option value="" ${!this._config.task_calendar ? 'selected' : ''}>First writable calendar (auto)</option>
      ${this.getConfiguredEntitiesForEditor().map(entityId => `
        <option value="${entityId}" ${this._config.task_calendar === entityId ? 'selected' : ''}>${this.escapeHtml(this.getEntityFriendlyName(entityId))}</option>
      `).join('')}
    `;
    const sharedTaskCalendarFields = `
      <div class="field-row" style="margin-top:8px;">
        <div class="field field-inline">
          <label for="task_calendar">Default calendar for task drops</label>
          <select id="task_calendar" data-field="task_calendar">${calendarSelectOptions}</select>
        </div>
      </div>
      <div class="boolean-list" style="margin-top:8px;">
        <label><input type="checkbox" data-field="ask_calendar_on_task_drop" ${this._config.ask_calendar_on_task_drop ? 'checked' : ''}> Ask which calendar on each task drop</label>
        <label><input type="checkbox" data-field="show_task_panel" ${this._config.show_task_panel !== false ? 'checked' : ''}> Show task backlog panel</label>
      </div>
    `;
    const l1Val = this._config.backlog_group_l1 || 'contexts';
    const l2Val = this._config.backlog_group_l2 || 'tags';
    const inlineVal = this._config.backlog_group_inline || 'projects';
    const groupFieldOptions = (current) => ['none', 'contexts', 'tags', 'projects']
      .map(v => `<option value="${v}" ${current === v ? 'selected' : ''}>${v === 'none' ? 'None' : v.charAt(0).toUpperCase() + v.slice(1)}</option>`)
      .join('');
    const backlogGroupingFields = `
      <div style="margin-top:12px; padding-top:10px; border-top:1px solid var(--divider-color,rgba(0,0,0,0.08));">
        <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--secondary-text-color,#6b7280);margin-bottom:8px;">Backlog grouping</div>
        <div class="field-row">
          <div class="field field-inline">
            <label for="backlog_group_l1">Level 1 heading</label>
            <select id="backlog_group_l1" data-field="backlog_group_l1">${groupFieldOptions(l1Val)}</select>
          </div>
        </div>
        <div class="field-row" style="margin-top:6px;">
          <div class="field field-inline">
            <label for="backlog_group_l2">Level 2 heading</label>
            <select id="backlog_group_l2" data-field="backlog_group_l2">${groupFieldOptions(l2Val)}</select>
          </div>
        </div>
        <div class="field-row" style="margin-top:6px;">
          <div class="field field-inline">
            <label for="backlog_group_inline">Inline label on task</label>
            <select id="backlog_group_inline" data-field="backlog_group_inline">${groupFieldOptions(inlineVal)}</select>
          </div>
        </div>
      </div>
    `;
    const tasksSection = this.renderSection('Tasks & backlog', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="task_source">Task source</label>
          <select id="task_source" data-field="task_source">
            <option value="none" ${taskSource === 'none' ? 'selected' : ''}>None</option>
            <option value="ha_todo" ${taskSource === 'ha_todo' ? 'selected' : ''}>HA To-do</option>
            <option value="tasknotes" ${taskSource === 'tasknotes' ? 'selected' : ''}>Obsidian TaskNotes</option>
          </select>
        </div>
      </div>
      ${taskSource === 'ha_todo' ? `
        <div class="field-row" style="margin-top:8px;">
          <div class="field">
            <label>To-do entities</label>
            <div class="list-checkbox-grid">${taskEntityRows}</div>
          </div>
        </div>
        ${sharedTaskCalendarFields}
        ${backlogGroupingFields}
      ` : ''}
      ${taskSource === 'tasknotes' ? `
        <div class="field-row" style="margin-top:8px;">
          <div class="field field-inline">
            <label for="tasknotes_api_url">TaskNotes API URL</label>
            <input id="tasknotes_api_url" data-field="tasknotes_api_url" type="text" value="${this.escapeHtml(this._config.tasknotes_api_url || '')}" placeholder="http://192.168.0.75:8181">
          </div>
        </div>
        <div class="field-row" style="margin-top:8px;">
          <div class="field field-inline">
            <label for="tasknotes_api_token">API token (optional)</label>
            <input id="tasknotes_api_token" data-field="tasknotes_api_token" type="password" value="${this.escapeHtml(this._config.tasknotes_api_token || '')}" placeholder="Leave blank if unauthenticated">
          </div>
        </div>
        ${sharedTaskCalendarFields}
        ${backlogGroupingFields}
      ` : ''}
    `);

    const calendarOptions = `
      <option value="" ${!this._config.meal_calendar ? 'selected' : ''}>First writable calendar (auto)</option>
      ${this.getConfiguredEntitiesForEditor().map(entityId => `
        <option value="${entityId}" ${this._config.meal_calendar === entityId ? 'selected' : ''}>${this.escapeHtml(this.getEntityFriendlyName(entityId))}</option>
      `).join('')}
    `;
    const mealSection = this.renderSection('Meal plans', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="meal_calendar">Default calendar for meal events</label>
          <select id="meal_calendar" data-field="meal_calendar">
            ${calendarOptions}
          </select>
        </div>
      </div>
    `);

    const managementSection = this.renderSection('Event management', `
      <div class="boolean-list">
        <label><input type="checkbox" data-field="enable_event_management" ${this._config.enable_event_management !== false ? 'checked' : ''}> Enable event management</label>
      </div>
      ${this.renderSubSection('Read-only calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('readonly_calendars', { label: 'read-only calendars' })}</div>`)}
    `);

    const localeSection = this.renderSection('Localization & preferences', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="language">Language code</label>
          <input id="language" data-field="language" type="text" value="${this._config.language || ''}" placeholder="en, fr, de...">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="locale">Locale override</label>
          <input id="locale" data-field="locale" type="text" value="${this._config.locale || ''}" placeholder="en-US">
        </div>
      </div>
      <div class="field field-inline">
        <label for="preference_storage_key">Preference storage key</label>
        <input id="preference_storage_key" data-field="preference_storage_key" type="text" value="${this._config.preference_storage_key || ''}" placeholder="Optional custom key">
      </div>
    `);

    this.innerHTML = `
      <style>
        .card-config {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 8px 0;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .field.field-inline {
          display: grid;
          grid-template-columns: minmax(180px, 260px) 1fr;
          align-items: center;
          gap: 8px;
        }

        .field-row {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }

        .field label {
          font-weight: 500;
          color: var(--primary-text-color);
        }

        .field input,
        .field select,
        .field textarea {
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          font: inherit;
          color: var(--primary-text-color);
          background: var(--card-background-color);
        }

        .field textarea {
          min-height: 70px;
          resize: vertical;
        }

        .weekday-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 6px;
          align-items: center;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
          background: var(--card-background-color);
        }

        .weekday-label {
          text-align: center;
          font-weight: 500;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }

        .weekday-checkbox-wrap {
          display: flex;
          justify-content: center;
        }

        .map-grid {
          display: grid;
          gap: 8px;
        }

        .map-row {
          display: grid;
          grid-template-columns: minmax(160px, 220px) 1fr;
          gap: 8px;
          align-items: center;
        }

        .list-checkbox-grid {
          display: grid;
          gap: 8px;
        }

        .list-checkbox-row {
          display: grid;
          grid-template-columns: minmax(160px, 220px) 1fr;
          gap: 8px;
          align-items: center;
          font-weight: 400;
        }

        .list-checkbox-row input[type="checkbox"] {
          justify-self: end;
        }

        .color-picker-wrap {
          display: inline-flex;
          align-items: center;
        }

        .selected-color-swatch {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          border: 1px solid var(--divider-color);
          background: var(--selected-color);
          cursor: pointer;
          padding: 0;
          display: inline-block;
        }

        .color-picker-dialog {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 1000;
        }

        .color-picker-dialog.show {
          display: block;
        }

        .color-picker-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }

        .color-picker-modal {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: min(460px, calc(100vw - 24px));
          background: var(--card-background-color);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.25);
          display: grid;
          gap: 12px;
        }

        .color-picker-title {
          font-size: 1.8rem;
          font-weight: 600;
        }

        .color-picker-wheel {
          position: relative;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          margin: 0 auto;
          background:
            radial-gradient(circle at center, #ffffff 0%, rgba(255, 255, 255, 0.85) 16%, rgba(255, 255, 255, 0) 58%),
            conic-gradient(from 0deg, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #8b00ff, #ff00ff, #ff0000);
        }

        .color-picker-wheel-marker {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .color-picker-controls {
          display: grid;
          gap: 6px;
        }

        .color-picker-controls input[type="text"] {
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          font: inherit;
          color: var(--primary-text-color);
          background: var(--card-background-color);
        }

        .color-picker-presets {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .color-preset {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.08);
          cursor: pointer;
        }

        .color-picker-selected-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .color-picker-preview {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 1px solid var(--divider-color);
        }

        .color-picker-value {
          font-family: monospace;
        }

        .color-picker-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .color-picker-actions button {
          border: 1px solid var(--divider-color);
          background: var(--card-background-color);
          border-radius: 6px;
          padding: 8px 12px;
          cursor: pointer;
          color: var(--primary-text-color);
        }

        .color-picker-actions button.primary {
          background: var(--primary-color);
          color: white;
          border-color: transparent;
        }

        .map-label {
          font-weight: 500;
          color: var(--primary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .config-section {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-text-color) 4%);
        }

        .config-section summary {
          cursor: pointer;
          padding: 10px;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .config-section summary::before,
        .config-subsection summary::before {
          content: '›';
          font-size: 1.2rem;
          line-height: 1;
          transform: rotate(0deg);
          transition: transform 120ms ease;
          color: var(--secondary-text-color);
        }

        .config-section[open] > summary::before,
        .config-subsection[open] > summary::before {
          transform: rotate(90deg);
        }

        .config-section summary::-webkit-details-marker {
          display: none;
        }

        .section-content {
          border-top: 1px solid var(--divider-color);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .config-subsection {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: var(--card-background-color);
        }

        .config-subsection summary {
          cursor: pointer;
          padding: 8px 10px;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .config-subsection summary::-webkit-details-marker {
          display: none;
        }

        .subsection-content {
          border-top: 1px solid var(--divider-color);
          padding: 10px;
        }

        .entity-list,
        .boolean-list {
          display: grid;
          gap: 4px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
          background: var(--card-background-color);
        }

        .entity-list {
          max-height: 200px;
          overflow: auto;
        }

        .entity-list label,
        .boolean-list label {
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .helper {
          margin: 0;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }
      </style>
      <div class="card-config">
        <div class="field field-inline">
          <label for="title">Title</label>
          <input id="title" data-field="title" type="text" value="${this._config.title || ''}" placeholder="Family Calendar">
        </div>

        <div class="field">
          <label for="default_view">Default view</label>
          <select id="default_view" data-field="default_view">
            <option value="month" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'month' ? 'selected' : ''}>Month</option>
            <option value="week-compact" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'week-compact' ? 'selected' : ''}>Week</option>
            <option value="week-standard" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'week-standard' ? 'selected' : ''}>Schedule</option>
            <option value="agenda" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'agenda' ? 'selected' : ''}>Agenda</option>
          </select>
        </div>

        <div class="field">
          <label>Calendars</label>
          <div class="entity-list" id="entity-list"></div>
          <p class="helper">Select one or more calendar entities to display.</p>
        </div>

        ${displayLayoutSection}
        ${colorStylingSection}
        ${backgroundSection}
        ${eventSection}
        ${tasksSection}
        ${mealSection}
        ${managementSection}
        ${localeSection}
      </div>
      ${this.renderColorPickerDialog()}
    `;

    this.refreshCalendarEntities();

    this.querySelectorAll('[data-field]').forEach((input) => {
      const eventName = input.type === 'text' ? 'input' : 'change';
      input.addEventListener(eventName, (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-map-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-list-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-weekday]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-color-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => this.openColorPicker(trigger.dataset.colorField, trigger.dataset.colorMapKey || null));
    });

    const wheel = this.querySelector('#color-picker-wheel');
    if (wheel) {
      let dragging = false;
      wheel.addEventListener('pointerdown', (event) => {
        dragging = true;
        this.updateColorPickerFromWheelEvent(event);
      });
      wheel.addEventListener('pointermove', (event) => {
        if (dragging) this.updateColorPickerFromWheelEvent(event);
      });
      wheel.addEventListener('pointerup', () => { dragging = false; });
      wheel.addEventListener('pointerleave', () => { dragging = false; });
    }

    this.querySelectorAll('[data-color-preset]').forEach((preset) => {
      preset.addEventListener('click', () => {
        const hex = preset.dataset.colorPreset;
        const hsv = this.hexToHsv(hex);
        this._colorPickerState.h = hsv.h;
        this._colorPickerState.s = hsv.s;
        this._colorPickerState.v = hsv.v;
        this._colorPickerState.color = this.hsvToHex(hsv.h, hsv.s, hsv.v);
        this.syncColorPickerUi();
      });
    });

    this.querySelectorAll('[data-close-color-picker]').forEach((button) => {
      button.addEventListener('click', () => this.closeColorPicker());
    });

    const brightnessInput = this.querySelector('#color-picker-brightness');
    if (brightnessInput) {
      brightnessInput.addEventListener('input', (event) => {
        this._colorPickerState.v = Number(event.target.value) / 100;
        this._colorPickerState.color = this.hsvToHex(this._colorPickerState.h, this._colorPickerState.s, this._colorPickerState.v);
        this.syncColorPickerUi();
      });
    }

    const hexInput = this.querySelector('#color-picker-hex');
    if (hexInput) {
      const syncHexColor = () => {
        const normalizedHex = this.normalizeHexColorInput(hexInput.value);
        if (!normalizedHex) return;
        const hsv = this.hexToHsv(normalizedHex);
        this._colorPickerState.h = hsv.h;
        this._colorPickerState.s = hsv.s;
        this._colorPickerState.v = hsv.v;
        this._colorPickerState.color = normalizedHex;
        this.syncColorPickerUi();
      };
      hexInput.addEventListener('input', syncHexColor);
      hexInput.addEventListener('change', syncHexColor);
    }

    const applyBtn = this.querySelector('#apply-color-picker');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        this.applyColorPickerColor(this._colorPickerState.color);
      });
    }

    this._rendered = true;
  }

  refreshCalendarEntities() {
    const entityListContainer = this.querySelector('#entity-list');
    if (!entityListContainer) return;

    const calendarEntities = this.getCalendarEntities();
    const nextKey = calendarEntities.join('|');

    if (this._lastCalendarEntitiesKey === nextKey && entityListContainer.childElementCount > 0) {
      const selectedEntities = new Set(this._config.entities || []);
      entityListContainer.querySelectorAll('input[data-field="entity"]').forEach((checkbox) => {
        checkbox.checked = selectedEntities.has(checkbox.value);
      });
      return;
    }

    this._lastCalendarEntitiesKey = nextKey;
    const selectedEntities = new Set(this._config.entities || []);

    if (calendarEntities.length === 0) {
      entityListContainer.innerHTML = '<p class="helper">No calendar entities found yet.</p>';
      return;
    }

    entityListContainer.innerHTML = calendarEntities
      .map((entityId) => {
        const friendlyName = this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
        const checked = selectedEntities.has(entityId) ? 'checked' : '';
        return `<label><input type="checkbox" data-field="entity" value="${entityId}" ${checked}> ${friendlyName}</label>`;
      })
      .join('');

    entityListContainer.querySelectorAll('input[data-field="entity"]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });
  }

  updateFieldValues() {
    const titleInput = this.querySelector('input[data-field="title"]');
    if (titleInput && document.activeElement !== titleInput) {
      titleInput.value = this._config.title || '';
    }

    const defaultView = this.querySelector('select[data-field="default_view"]');
    if (defaultView && document.activeElement !== defaultView) {
      defaultView.value = this.normalizeDefaultViewForEditor(this._config.default_view);
    }

    const firstDayOfWeek = this.querySelector('select[data-field="first_day_of_week"]');
    if (firstDayOfWeek && document.activeElement !== firstDayOfWeek) {
      firstDayOfWeek.value = String(Number(this._config.first_day_of_week ?? 0));
    }

    this.querySelectorAll('input[type="checkbox"][data-field]').forEach((checkbox) => {
      if (checkbox.dataset.field === 'enable_event_management') {
        checkbox.checked = this._config.enable_event_management !== false;
        return;
      }
      checkbox.checked = !!this._config[checkbox.dataset.field];
    });

    this.querySelectorAll('input[type="checkbox"][data-list-field]').forEach((checkbox) => {
      const listField = checkbox.dataset.listField;
      checkbox.checked = this.getListFieldValue(listField).includes(checkbox.value);
    });

    this.querySelectorAll('input[data-type="number"], input[data-type="nullable-number"], input[data-type="list"], input[data-field="language"], input[data-field="locale"], input[data-field="preference_storage_key"], input[data-field="background_image_url"], input[data-field="background_image_size"], input[data-field="background_image_position"], input[data-field="background_image_repeat"]').forEach((input) => {
      if (document.activeElement === input) return;
      const field = input.dataset.field;
      const type = input.dataset.type;
      if (type === 'list') input.value = this.getListInputValue(field);
      else if (type === 'nullable-number') input.value = this._config[field] ?? '';
      else if (type === 'number') input.value = Number(this._config[field] ?? this.getEditorDefaultValue(field));
      else input.value = this._config[field] || '';
    });

    this.querySelectorAll('input[type="checkbox"][data-weekday]').forEach((checkbox) => {
      const weekday = Number(checkbox.dataset.weekday);
      checkbox.checked = this.getListFieldValue('week_days').includes(weekday);
    });

    this.querySelectorAll('select[data-field]').forEach((select) => {
      if (document.activeElement === select) return;
      const field = select.dataset.field;
      if (field === 'default_view') return;
      if (field === 'first_day_of_week') return;
      if (field === 'event_calendar_bubble_mode') {
        select.value = this.getEventCalendarBubbleMode();
        return;
      }

      if (field === 'combine_background_mode') {
        select.value = this._combineBackgroundMode;
        return;
      }
      select.value = this._config[field] || '';
    });

    const combineBackgroundHexInput = this.querySelector('input[data-field="combine_background_hex"]');
    if (combineBackgroundHexInput && document.activeElement !== combineBackgroundHexInput) {
      combineBackgroundHexInput.value = this._combineBackgroundHexDraft || '#FFFFFF';
    }

    const headerColorTextInput = this.querySelector('input[data-field="header_color_text"]');
    if (headerColorTextInput && document.activeElement !== headerColorTextInput) {
      headerColorTextInput.value = this._config.header_color || '';
    }

    const headerTextColorTextInput = this.querySelector('input[data-field="header_text_color_text"]');
    if (headerTextColorTextInput && document.activeElement !== headerTextColorTextInput) {
      headerTextColorTextInput.value = this._config.header_text_color || '';
    }

    this.querySelectorAll('[data-map-field]').forEach((input) => {
      if (document.activeElement === input) return;
      const mapField = input.dataset.mapField;
      const mapKey = input.dataset.mapKey;
      const value = this.getMapFieldValue(mapField)[mapKey] || '';
      input.value = value;
    });

    this.querySelectorAll('.selected-color-swatch').forEach((swatch) => {
      const field = swatch.dataset.colorField;
      const mapKey = swatch.dataset.colorMapKey || null;
      const nextColor = this.getColorValue(field, mapKey);
      swatch.style.setProperty('--selected-color', nextColor);
    });

    this.refreshCalendarEntities();
  }

  parseList(value, { asNumbers = false } = {}) {
    const parsed = String(value || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    if (!asNumbers) return parsed;
    return parsed
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item));
  }

  handleChange(event) {
    const field = event.target.dataset.field;
    const nextConfig = { ...this.value };

    if (field === 'event_calendar_bubble_mode') {
      const selectedMode = event.target.value;
      if (selectedMode === 'friendly_name') {
        nextConfig.event_calendar_friendly_name = true;
        nextConfig.hide_event_calendar_bubble = false;
      } else if (selectedMode === 'none') {
        nextConfig.event_calendar_friendly_name = false;
        nextConfig.hide_event_calendar_bubble = true;
      } else {
        nextConfig.event_calendar_friendly_name = false;
        nextConfig.hide_event_calendar_bubble = false;
      }

      this._config = nextConfig;
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'combine_background_mode') {
      this._combineBackgroundMode = event.target.value;
      if (this._combineBackgroundMode === 'hex') {
        const currentHex = this.normalizeHexColor(this._config.combine_background) || this._combineBackgroundHexDraft || '#FFFFFF';
        this._combineBackgroundHexDraft = currentHex;
        nextConfig.combine_background = currentHex;
      } else {
        this._combineBackgroundHexDraft = '';
        nextConfig.combine_background = this._combineBackgroundMode;
      }

      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'combine_background_hex') {
      const normalizedHex = this.normalizeHexColor(event.target.value);
      if (normalizedHex) {
        this._combineBackgroundHexDraft = normalizedHex;
        nextConfig.combine_background = normalizedHex;
      } else {
        this._combineBackgroundHexDraft = event.target.value;
      }

      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'entity') {
      const selected = Array.from(this.querySelectorAll('input[data-field="entity"]:checked')).map((input) => input.value);
      nextConfig.entities = selected;
      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    } else if (event.target.dataset.mapField) {
      const mapField = event.target.dataset.mapField;
      const mapKey = event.target.dataset.mapKey;
      const mapValue = { ...this.getMapFieldValue(mapField) };
      const nextValue = event.target.value;
      if (nextValue === '') delete mapValue[mapKey];
      else mapValue[mapKey] = nextValue;
      nextConfig[mapField] = mapValue;
    } else if (event.target.dataset.listField) {
      const listField = event.target.dataset.listField;
      const checkedValues = Array.from(this.querySelectorAll(`input[data-list-field="${listField}"]:checked`)).map((input) => input.value);
      nextConfig[listField] = checkedValues;
    } else if (event.target.dataset.weekday !== undefined) {
      const selectedWeekdays = Array.from(this.querySelectorAll('input[data-weekday]:checked'))
        .map((input) => Number(input.dataset.weekday))
        .filter((value) => Number.isFinite(value))
        .sort((a, b) => a - b);
      nextConfig.week_days = selectedWeekdays;
    } else if (event.target.type === 'checkbox') {
      nextConfig[field] = event.target.checked;
      if (field === 'background_transparent') {
        nextConfig.background_opacity = event.target.checked ? 100 : 0;
      }
      if (field === 'compact_height' || field === 'combine_calendars') {
        this._config = nextConfig;
        this.render();
        this.dispatchEvent(
          new CustomEvent('config-changed', {
            detail: { config: nextConfig },
            bubbles: true,
            composed: true
          })
        );
        return;
      }
    } else if (event.target.dataset.type === 'color') {
      nextConfig[field] = event.target.value;
    } else if (event.target.dataset.type === 'color-text') {
      nextConfig.header_color = event.target.value;
    } else if (event.target.dataset.type === 'header-text-color-text') {
      nextConfig.header_text_color = event.target.value;
    } else if (event.target.dataset.type === 'number') {
      if (event.target.value === '') {
        nextConfig[field] = this.getEditorDefaultValue(field);
        if (field === 'background_opacity') {
          nextConfig.background_transparent = false;
        }
      } else {
        const numericValue = Number(event.target.value);
        const parsedValue = Number.isFinite(numericValue) ? numericValue : this.getEditorDefaultValue(field);
        if (field === 'week_start_hour' || field === 'week_end_hour') {
          nextConfig[field] = Math.min(23, Math.max(0, parsedValue));
        } else if (field === 'background_opacity') {
          nextConfig.background_opacity = this.normalizeBackgroundOpacity(parsedValue, 0);
          nextConfig.background_transparent = nextConfig.background_opacity >= 100;
        } else {
          nextConfig[field] = parsedValue;
        }
      }
    } else if (event.target.dataset.type === 'nullable-number') {
      if (event.target.value === '') {
        nextConfig[field] = null;
      } else {
        const numericValue = Number(event.target.value);
        nextConfig[field] = Number.isFinite(numericValue) ? numericValue : null;
      }
    } else if (event.target.dataset.type === 'list') {
      nextConfig[field] = this.parseList(event.target.value);
    } else {
      nextConfig[field] = event.target.value;
    }

    this._config = nextConfig;

    // Re-render when task_source changes so source-specific fields show/hide
    if (field === 'task_source') {
      this.render();
    }

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }
}

customElements.define('skylight-calendar-card-dev', SkylightCalendarCard);
customElements.define('skylight-calendar-card-dev-editor', SkylightCalendarCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'skylight-calendar-card-dev',
  name: 'Skylight Calendar Card (Dev)',
  description: 'A beautiful calendar card inspired by Skylight Calendar',
  preview: true,
  documentationURL: 'https://github.com/superdingo101/skylight-calendar-card'
});
