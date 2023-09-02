class ThemeChecker {
  getInfo() {
    return {
      id: 'themechecker',
      name: 'Theme Checker',
      blocks: [
        {
          opcode: 'checkTheme',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get Theme'
        }
      ]
    };
  }

  checkTheme() {
    // Check if the device's theme is light
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 2; // Light theme
    } else {
      return 1; // Dark theme
    }
  }
}

Scratch.extensions.register(new ThemeChecker());
