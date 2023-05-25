import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileDropzone from '../FileDropzone';w

describe('FileDropzone', () => {
  test('handles file selection', () => {
    const saveFilesMock = jest.fn();
    const { container } = render(<FileDropzone saveFiles={saveFilesMock} />);
    const fileInput = container.querySelector('input[type="file"]');

    // Mock file object
    const file = new File(['test file'], 'test.txt', { type: 'text/plain' });

    // Simulate file selection
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Check if saveFiles function is called with the selected file
    expect(saveFilesMock).toHaveBeenCalledWith([file]);
  });
});
