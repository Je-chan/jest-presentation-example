const dummyA = {
  name: 'Je',
  tall: 184,
};

const dummyB = {
  name: 'Liebe',
  tall: 183,
};

test('데이터가 일치해야 합니다', () => {
  expect(dummyA.name).toBe('Je');
  expect(dummyA).toEqual({
    name: 'Je',
    tall: 184,
  });
});

test('데이터가 일치하지 않아야 합니다', () => {
  expect(dummyB.tall).not.toBe(129);
  expect(dummyA).not.toBe({
    name: 'Je',
    tall: 184,
  });
});
