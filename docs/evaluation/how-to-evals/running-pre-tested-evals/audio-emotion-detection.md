# Audio Emotion Detection

The **Emotion Detection Eval Template** is designed to classify emotions from audio files. This evaluation leverages predefined characteristics, such as tone, pitch, and intensity, to detect the most dominant emotion expressed in an audio input. This guide will walk you through how to use the template within the Phoenix framework to evaluate emotion classification models effectively.

## Template Details

The following is the structure of the `EMOTION_PROMPT_TEMPLATE`:

```
You are an AI system designed to classify emotions in audio files.

### TASK:
Analyze the provided audio file and classify the primary emotion based on these characteristics:
- Tone: General tone of the speaker (e.g., cheerful, tense, calm).
- Pitch: Level and variability of the pitch (e.g., high, low, monotone).
- Pace: Speed of speech (e.g., fast, slow, steady).
- Volume: Loudness of the speech (e.g., loud, soft, moderate).
- Intensity: Emotional strength or expression (e.g., subdued, sharp, exaggerated).

The classified emotion must be one of the following:
['anger', 'happiness', 'excitement', 'sadness', 'neutral', 'frustration', 'fear', 'surprise', 'disgust', 'other']

IMPORTANT: Choose the most dominant emotion expressed in the audio. Neutral should only be used when no other emotion is clearly present; do your best to avoid this label.

************

Here is the audio to classify:

{audio}

RESPONSE FORMAT:

Provide a single word from the list above representing the detected emotion.

************

EXAMPLE RESPONSE: excitement

************

Analyze the audio and respond in this format.
```

#### Template Module

The prompt and evaluation logic are part of the `phoenix.evals.default_audio_templates` module and are defined as:

* **`EMOTION_AUDIO_RAILS`**: Output options for the evaluation template.&#x20;
* **`EMOTION_PROMPT_TEMPLATE`**: Prompt used for evaluating audio emotions.
