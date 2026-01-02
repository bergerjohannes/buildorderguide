const ACRONYM_PATTERN = /^[A-Z0-9]+$/;
const SMALL_WORDS = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "but",
  "by",
  "for",
  "from",
  "in",
  "into",
  "nor",
  "of",
  "on",
  "or",
  "per",
  "than",
  "the",
  "to",
  "vs",
  "with",
]);

export function toTitleCaseLabel(input: string | undefined | null): string {
  if (!input) {
    return "";
  }

  const normalizedInput = input.normalize("NFKC");
  const WORD_REGEX = /[A-Za-z0-9']+/g;
  const matches = Array.from(normalizedInput.matchAll(WORD_REGEX));

  if (matches.length === 0) {
    return normalizedInput;
  }

  const totalWords = matches.length;
  let lastIndex = 0;
  let forceCapNext = true;
  const parts: string[] = [];

  for (let index = 0; index < totalWords; index++) {
    const match = matches[index];
    const word = match[0];
    const start = match.index ?? 0;
    const end = start + word.length;
    const lower = word.toLowerCase();
    const isFirst = index === 0;
    const isLast = index === totalWords - 1;
    const preceding = normalizedInput.slice(lastIndex, start);
    const hasTerminalPunctuation = /[:.!?]/.test(preceding);
    if (hasTerminalPunctuation) {
      forceCapNext = true;
    }

    const isSmallWord = SMALL_WORDS.has(lower);
    const isAcronym =
      !isSmallWord &&
      ((ACRONYM_PATTERN.test(word) && word.length <= 4) ||
        word === word.toUpperCase());

    const shouldForce = forceCapNext || isFirst;

    parts.push(normalizedInput.slice(lastIndex, start));

    let transformed = word;
    if (!isAcronym) {
      if (isSmallWord && !shouldForce && !isLast) {
        transformed = lower;
      } else {
        transformed = lower.charAt(0).toUpperCase() + lower.slice(1);
      }
    } else {
      transformed = word.toUpperCase();
    }

    parts.push(transformed);
    lastIndex = end;

    const nextStart =
      index + 1 < totalWords
        ? matches[index + 1].index ?? normalizedInput.length
        : normalizedInput.length;

    const between = normalizedInput.slice(end, nextStart);
    forceCapNext = /[:.!?]/.test(between);
  }

  parts.push(normalizedInput.slice(lastIndex));

  return parts.join("");
}
