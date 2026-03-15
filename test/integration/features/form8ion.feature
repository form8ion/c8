Feature: c8 as form8ion plugin

  Scenario: plugin conventions
    When the c8 plugin is compared to form8ion plugin conventions
    Then the public interface is compatible with the plugin schema
#    And the output produced by the scaffolder is detectable by the predicate
